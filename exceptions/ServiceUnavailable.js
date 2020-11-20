const HttpException = require('./HttpException');

module.exports = class ServiceUnavailable extends HttpException {

	constructor ( ) {

		super ( 
			'serviceUnavailable', 
			'Service unavailable', 
			500 
		);
	}
};