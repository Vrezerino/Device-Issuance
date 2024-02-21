const mongoose = require('mongoose');
const badwords = require('../utils/badwords');

// Validation functions; values must not be empty nor contain badwords.
const isNotEmpty = (string) => string !== ''
const containsNoBadwords = (string) => !badwords.array.some(badword => string.toLowerCase().includes(badword));

const validators = [
	{ validator: isNotEmpty, msg: 'No content.' },
	{ validator: containsNoBadwords, msg: 'Watch your language.' }
]

const deviceSchema = mongoose.Schema({
	deviceName: {
		type: String,
		validate: validators,
		maxlength: [30, 'Device name max length is 30.']
	},
	deviceManufacturer: {
		type: String,
		validate: validators,
		maxlength: [30, 'Manufacturer name max length is 30.']
	},
	deviceNumber: {
		type: String,
		validate: validators,
		maxlength: [30, 'Device number max length is 30.']
	},
	issues: Array,
	/*
	issueDate: String,
    recipientName: {
		type: String,
		validate: validators,
		maxlength: [50, 'Poster name max length is 50.']
	},
	recipientDepartment: {
		type: String,
		validate: validators,
		maxlength: [3000, 'Content max length is 3000.']
	},
	returnDate: {
		data: Buffer,
		type: String
	},
	*/
});

module.exports = mongoose.model('Device', deviceSchema);