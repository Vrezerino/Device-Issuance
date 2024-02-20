const deviceRouter = require('express').Router();

deviceRouter.get('/', async (req, res, next) => {
    try {
        const all = await Device //...
    } catch (e) {

    }
});

module.exports = deviceRouter;