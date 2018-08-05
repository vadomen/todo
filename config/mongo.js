// mlab.com sandbox credentials is used as a fallback
const host = process.env.DB_HOST || '';
const username = process.env.DB_USERNAME || '';
const password = process.env.DB_PASSWORD || '';
const port = process.env.DB_PORT || 53851;
const dbName = process.env.DB_NAME || 'todo';

const connectionString = `mongodb://${username}:${password}@${host}:${port}/${dbName}`;

module.exports = {
  connectionString,
  options: { useNewUrlParser: true },
};
