require('dotenv').config();

const DB_URI = process.env.NODE_ENV === 'production' 
	? process.env.DB_URI 
	: (process.env.NODE_ENV === 'development' 
		? process.env.DEVDB_URI 
		: process.env.TESTDB_URI)

const PORT = process.env.NODE_ENV === 'production' 
	? process.env.PORT 
	: (process.env.NODE_ENV === 'development' 
		? process.env.DEVPORT 
		: process.env.TESTPORT)

module.exports = {
    DB_URI,
    PORT
}