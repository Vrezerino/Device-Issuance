const express = require('express');
const app = express();
const config = require('./utils/config');

app.listen(config.PORT, () => {
    console.log('Device Issuance server listening on port 8080.');
});

module.exports = {
    app
}