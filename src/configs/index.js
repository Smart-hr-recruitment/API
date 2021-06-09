const rootPath = process.cwd();
require('dotenv-flow').config({ path: `${rootPath}/enviroments` });

const { env } = process;

const port = env.PORT || '5000';
const apiVersion = env.API_VERSION || '/api/v1.0';

const host = env.DB_HOST || 'mongodb+srv';
const user = env.DB_USER || 'dbuser';
const pass = env.DB_PASS || 'asdf';
const cluster = env.DB_CLUSTER || 'cluster0.q31vc.mongodb.net';
const dbName = env.DB_NAME || 'smartrecruiter';

const mongoUri = `${host}://${user}:${pass}@${cluster}/${dbName}`;

module.exports = {
  port,
  mongoUri,
  apiVersion,
};
