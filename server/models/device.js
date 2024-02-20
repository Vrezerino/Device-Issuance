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
    date: String,
	deviceName: {
		type: String,
		validate: validators,
		maxlength: [50, 'Poster name max length is 50.']
	},
	deviceManufacturer: {
		type: String,
		validate: validators,
		maxlength: [3000, 'Content max length is 3000.']
	},
	deviceNumber: {
		type: String,
		validate: validators,
		maxlength: [90, 'Title max length is 90.']
	},
    recipientName: {
		type: String,
		validate: validators,
		maxlength: [50, 'Poster name max length is 50.']
	},
	department: {
		type: String,
		validate: validators,
		maxlength: [3000, 'Content max length is 3000.']
	},
	returnDate: {
		data: Buffer,
		type: String
	},
});

module.exports = mongoose.model('Device', deviceSchema);