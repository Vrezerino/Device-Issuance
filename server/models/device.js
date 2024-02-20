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
	name: {
		type: String,
		validate: validators,
		maxlength: [50, 'Poster name max length is 50.']
	},
	manufacturer: {
		type: String,
		validate: validators,
		maxlength: [3000, 'Content max length is 3000.']
	},
	number: {
		type: String,
		validate: validators,
		maxlength: [90, 'Title max length is 90.']
	},
	returnDate: {
		data: Buffer,
		type: String
	},
});

module.exports = mongoose.model('Device', deviceSchema);