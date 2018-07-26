const moment = require('moment');
const Agenda = require('agenda');
const nodemailer = require('nodemailer');
const { logger, email: { emailConfig, mailOptions }, mongo: { connectionString, options } } = require('../../config');

const agenda = new Agenda({ db: { address: connectionString, options } });
const transporter = nodemailer.createTransport(emailConfig);

agenda.define('send remainder', { priority: 'high', concurrency: 10 }, (job, done) => {
  const { title } = job.attrs.data;
  const text = `Do not forget to deal with "${title}"`;

  transporter.sendMail({ ...mailOptions, text }, (error, info) => {
    if (error) {
      return logger(error);
    }
    logger.debug(`Message sent: ${info.messageId}`);
    return done();
  });
});

const schedule = async (date, title) => {
  await agenda.start();
  await agenda.schedule(date.format(), 'send remainder', { title });
};

const remindHandler = async ({ remind, title }, id, model) => {
  const now = moment();
  const remindDate = moment(remind).isValid() ? moment(remind) : null;
  let task;
  if (remindDate && remindDate.isAfter(now)) {
    if (!title) {
      const mongoQuery = model.findById(id);
      task = await mongoQuery.exec();
    }
    await schedule(remindDate, title || task.title);
  }
};

async function graceful() {
  await agenda.stop();
  process.exit(0);
}

process.on('SIGTERM', graceful);
process.on('SIGINT', graceful);

module.exports = {
  remindHandler,
};
