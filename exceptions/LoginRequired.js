const HttpException = require('./HttpException');

module.exports = class LoginRequired extends HttpException {

	constructor ( ) {

		super ( 
			'loginRequired', 
			'User authentication required', 
			401 
		);
	}
};