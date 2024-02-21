const deviceRouter = require('express').Router();
const Device = require('../models/device');

deviceRouter.get('/', async (req, res, next) => {
    try {
        const all = await Device.find({});
        res.json(all);
    } catch (e) {
        res.send(e.message);
    }
});

deviceRouter.get('/:deviceNumber', async (req, res, next) => {
    try {
        const result = await Device.findOne({ deviceNumber: req.params.deviceNumber });
        res.json(result);
    } catch (e) {
        res.send(e.message);
    }
});

deviceRouter.post('/:deviceNumber', async (req, res, next) => {
    const newIssue = {
        issueDate: new Date().toDateString(),
        recipientName: req.body.recipientName,
        recipientDepartment: req.body.recipientDepartment,
        returnDate: req.body.returnDate
    }

    // If issue's device exists, update the device's issue list. Otherwise save new device.
    const result = await Device.findOne({ deviceNumber: req.body.deviceNumber }).select('deviceNumber').lean();
    if (result) {
        await Device.findOneAndUpdate(
            { deviceNumber: req.body.deviceNumber },
            {
                $push: {
                    issues: newIssue
                }
            }
        )
        // Status Code 201 = Created
        res.status(201).send(result);
    } else {
        const device = new Device({ ...req.body, issues: [newIssue] });
        try {
            const savedDevice = await device.save();
            res.status(201).send(savedDevice);
        } catch (e) {
            console.error(e.message);
        }
    }
});

module.exports = deviceRouter;