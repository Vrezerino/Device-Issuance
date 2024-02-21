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

deviceRouter.post('/:deviceNumber', async (req, res, next) => {
    const issueDate = new Date().toDateString();

    // If issue's device exists, update the device's issue list. Otherwise save new device.
    const result = Device.findOne({ deviceNumber: req.body.deviceNumber }).select('deviceNumber').lean();
    if (result) {
        await Device.findOneAndUpdate(
            { deviceNumber: req.body.deviceNumber },
            {
                $push: {
                    issues:
                    {
                        issueDate: issueDate,
                        recipientName: req.body.recipientName,
                        recipientDepartment: req.body.recipientDepartment,
                        returnDate: req.body.returnDate
                    }
                }
            }
        )
        res.status(201).send(JSON.stringify(result));
    } else {
        const device = new Device({ ...req.body });
        try {
            const savedDevice = device.save();
            // Status Code 201 = Created
            res.status(201).send(JSON.stringify(savedDevice));
        } catch (e) {
            next(e);
        }
    }
});

module.exports = deviceRouter;