// mlab sandbox credentials is used as a fallback
const host = process.env.DB_HOST || 'ds153851.mlab.com';
const username = process.env.DB_USERNAME || 'todo';
const password = process.env.DB_PASSWORD || 'todo_db0';
const port = process.env.DB_PORT || 53851;
const dbName = process.env.DB_NAME || 'todo';

const connectionString = `mongodb://${username}:${password}@${host}:${port}/${dbName}`;

module.exports = {
  connectionString,
};
