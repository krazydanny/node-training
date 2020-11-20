const HttpException = require('./HttpException');

module.exports = class SessionExpired extends HttpException {

	constructor ( ) {

		super ( 
			'sessionExpired', 
			'Session expired', 
			401 
		);
	}
};