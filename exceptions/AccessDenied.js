const HttpException = require('./HttpException');

module.exports = class AccessDenied extends HttpException {

	constructor ( ) {

		super ( 'accessDenied', "Access Denied", 403 );
	}
};