require('dotenv').config('./.env');

const cors                      = require('cors');
const express                   = require('express');
const app                       = express();
const { connectDB, mongoClose } = require('smart-models-db');

const router                    = require('./src/routes');

const env        = process.env;
const port       = env.PORT || '8080';
const mongoUri   = env.MONGO_URI || 'Another mongo base';
const apiVersion = env.API_VERSION || '';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

// defining routes.
app.use(apiVersion, router);

const server = () => app
  .listen(port, () => console.log('running...'))
  .on('error', (err) => {
    if (err) throw err;
  });

connectDB(mongoUri).then(() => server());

process.on('SIGTERM', () => server().close(() => mongoClose(() => process.exit(0))));

module.exports = app;
