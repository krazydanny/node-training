const HttpException = require('./HttpException');

module.exports = class ValidationError extends HttpException {

	constructor ( messages ) {

	    switch ( messages.constructor.name ) {

	        case 'MongooseError':
	    
	    		var msgs = [];

	            if ( messages.name == 'ValidationError' ) {          

					for ( 
						let [key, value] of Object.entries( 
							messages.errors 
						) 
					) 
					{
						msgs.push({
							text: value.message,
							attribute: value.path,
						});
					}
				};

				break;


			default:

				var msgs = messages;

				break;			
	    };

	    super ( 'ValidationError', msgs, 400 );
	}
};