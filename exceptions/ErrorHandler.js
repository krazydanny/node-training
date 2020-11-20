const BaseException      = require('./BaseException');
const HttpException      = require('./HttpException');
const ServiceUnavailable = require('./ServiceUnavailable');
const ContentNotValid    = require('./ContentNotValid');
const ValidationError    = require('./ValidationError');


module.exports = class ErrorHandler {

    constructor ( options = {} ) {

        this.options = options;

        // default handler for rejected promises
        process.on(
            'unhandledRejection',
            ( err, promise ) => {
                this.handle(
                    err,
                    {
                        "event": 'unhandledRejection',
                        "promise": promise
                    }
                );
            }
        );

        // default handler for uncaught exceptions
        process.on(
            'uncaughtException',
            ( err, origin ) => {
                this.handle(
                    err,
                    {
                        "event": origin || 'uncaughtException'
                    }
                );
            }
        );
    }


    handle ( err, data = null ) {

        if ( err instanceof BaseException ) {

            var e = err;
        }
        else if ( 
            err instanceof SyntaxError 
            && err.type =='entity.parse.failed'
        ) {
            var e = new ContentNotValid;
        }
        else {

            switch( err.constructor.name ) {

                case 'MongooseError':

                    switch ( err.name ) {

                        case 'ValidationError':

                            var e = new ValidationError( err );

                            break;


                        default:

                            var e = new ServiceUnavailable;

                            break;
                    }

                    break;

                default:

                    var e = new ServiceUnavailable;
            };
        }

        if ( err instanceof BaseException ) {

            var source = null;
        }
        else {

            var source = {};

            for (
                let [key, value] of Object.entries( err )
            ) 
            {
              source[key] = value;
            }
        }

        e.addDebugInfo({
            class: err.constructor.name || null,
            code: err.code || null,
            message: err.message || null,
            source: source,
            context: data || null,
            trace: err.stack || null
        });

        if ( this.options.reportCallback ) {

            this.options.reportCallback( e );
        }
        else {

            console.log(
                e.json({ debugInfo: true })
            );            
        }

        return e;
    }


    handleAndSend ( err, req, res, next, data = null ) {

        var e = this.handle( err, data );

        if ( e instanceof HttpException ) {

            var status = e.getHttpCode();
        }
        else {

            var status = 500;
        }

        res.status( 
            status
        ).json( 
            e.json({ debugInfo: process.env.APP_DEBUG })
        );
    }


    middleware ( ) {

        return ( err, req, res, next ) => {

            return this.handleAndSend( err, req, res, next );
        };
    }

}