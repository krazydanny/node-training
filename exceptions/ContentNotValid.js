const HttpException = require('./HttpException');

module.exports = class ContentNotValid extends HttpException {

	constructor ( ) {

		super ( 'contentNotValid', "Invalid request content", 400 );
	}

};