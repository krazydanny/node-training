const HttpException = require('./HttpException');

module.exports = class NotFound extends HttpException {

	constructor ( ) {

		super ( 'notFound', 'Resource not found', 404 );
	}
};