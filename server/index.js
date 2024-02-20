const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const deviceRouter = require('./controllers/devices');

const logger = require('./utils/logger');
const config = require('./utils/config');

logger.info('Attempting to connect to Device Issuance database...');
mongoose.connect(config.DB_URI)
    .then(() => {
        logger.info('Connected to Device Issuance database!')
    })
    .catch((error) => {
        logger.error('Error while connecting to Device Issuance database:', error.message)
    });

    db.once('open', () => {
        app.listen(config.PORT, () => {
            logger.info(`Device Issuance server listening on port ${config.PORT}`);
        });
    });

app.use(cors());
app.use(express.json());
app.use('/api/devices', deviceRouter);

module.exports = {
    app,
    mongoose
};