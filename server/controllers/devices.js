const deviceRouter = require('express').Router();
const Device = require('../models/device');

deviceRouter.get('/', async (req, res, next) => {
    try {
        const all = await Device.find({});
        res.json(all);
    } catch (e) {
        next(e);
    }
});

deviceRouter.post('/', async (req, res, next) => {
    const issueDate = new Date().toUTCString();
    try {

    } catch (e) {
        next(e);
    }
});

module.exports = deviceRouter;