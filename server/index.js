const app = require('./app').app;
const mongoose = require('./app').mongoose;
const db = mongoose.connection;

const logger = require('./utils/logger');
const config = require('./utils/config');

db.once('open', () => {
    app.listen(config.PORT, () => {
        logger.info('Device Issuance server listening on port 8080.');
    });

    io.on('connection', (socket) => {
        logger.info('Client count:', io.engine.clientsCount)
    })

    io.engine.on('connection_error', (err) => {
        logger.error(err.req)
        logger.error(err.code)
        logger.error(err.message)
        logger.error(err.context)
    })
})

module.exports = {
    app
}