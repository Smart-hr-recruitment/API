const cors = require('cors');
const express = require('express');
const { compose } = require('compose-middleware');

const json = express.json();
const urlencoded = express.urlencoded({ extended: false });

const accessControlAllow = require('./accessControlAllow');

module.exports = {
  // errorHandler,
  combine: compose([
    urlencoded,
    json,
    cors,
    accessControlAllow,
  ]),
};
