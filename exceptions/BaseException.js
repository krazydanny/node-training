
module.exports = class BaseException extends Error {

	constructor ( code, message, debugInfo = null ) {

		super ( message );

		this.code 	 = code;
		this.message = message;
		
		this.addDebugInfo( debugInfo );
	}


	addDebugInfo ( debugInfo ) {

		this.debug = debugInfo;
	}


	getCode ( ) {

		return this.code;
	}


	getMessage ( ) {

		return this.message;
	}


	json ( options = {} ) {

		var json = {
			error: {
				code: this.code,
				message: this.message,
			}
		};

		if ( options.debugInfo === true ) {

			json.debug = this.debug;
		}

		return json;
	}

};