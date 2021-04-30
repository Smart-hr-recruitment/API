const express = require('express');
const app = express();

const cors = require('cors');
const path = require('path');

require('dotenv').config({ 
    path: path.resolve(__dirname, '../.env') 
});

const { connectDB, mongoClose } = require('smart-models-db');

const router = require('./routes');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(process.env.API_VERSION, router);

const server = () => app
  .listen(process.env.PORT, console.log('running...'))
  .on('error', (err) => {
    if (err) throw err;
  });

connectDB(process.env.MONGO_URI).then(() => {
  server();
});

process.on('SIGTERM', () => {
  console.info('\nSIGTERM signal received.');
  server().close(() => {
    console.log('Http server closed.');
    mongoClose(() => {
      console.log('MongoDb connection closed.');
      process.exit(0);
    });
  });
});

module.exports = app;