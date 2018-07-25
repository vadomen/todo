const express = require('express');
const bodyParser = require('body-parser');
const { badRequest, badImplementation } = require('boom');
const { logger, port, env } = require('./config');
const { connectDb } = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', (req, res) => res.json({ message: 'ok' }));

app.use((req, res, next) => {
  next(badRequest(404, 'The requested page is not existed!'));
});

app.use((err, req, res, next) => {
  const message = env === 'development' ? err.message : {};
  next(badImplementation(`Ooops! ${message}`));
});

connectDb().then(() => app.listen(port, () => logger.info(`Server is listening on port ${port} in ${env} mode`)));
