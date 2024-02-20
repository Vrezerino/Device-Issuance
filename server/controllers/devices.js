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
    const device = new Device({
        ...req.body,
        issueDate: req.body.issueDate
    });

    try {
        const addedDevice = device.save();
    } catch (e) {
        next(e);
    }
});

module.exports = deviceRouter;