const app = require('express')();
const { connectDB, mongoClose } = require('smart-models-db');

const router = require('./src/routes');
const configs = require('./src/configs');

const { port, mongoUri, apiVersion } = configs;

// defining routes.
app.use(apiVersion, router);

const server = () => app
  .listen(port, () => console.log(`Running on port ${port}...`))
  .on('error', (err) => { if (err) { throw err }});

connectDB(mongoUri).then(() => server());

process.on('SIGTERM', () => server().close(() => mongoClose(() => process.exit(0))));

module.exports = app;
