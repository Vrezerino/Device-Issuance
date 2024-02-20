const express = require('express');
const app = express();
const mongoose = require('mongoose');

const logger = require('./utils/logger');
const config = require('./utils/config');

mongoose.connect(config.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        logger.info('Connected to Device Issuance database!')
    })
    .catch((error) => {
        logger.error('Error while connecting to Device Issuance database:', error.message)
    })

module.exports = {
    app,
    mongoose
}