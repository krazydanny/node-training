const BaseException = require('./BaseException');

module.exports = class HttpException extends BaseException {

	constructor ( code, message, httpCode, debug = null ) {

		super( code, message, debug );

		this.httpCode = httpCode;
	}

	getHttpCode( ) {

		return this.httpCode;
	}
}