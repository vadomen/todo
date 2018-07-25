const express = require('express');
const bodyParser = require('body-parser');
const { logger, port, env } = require('./config');
const { connectDb } = require('./db');
const router = require('./app/baseRouter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

connectDb().then(() => app.listen(port, () => logger.info(`Server is listening on port ${port} in ${env} mode`)));
