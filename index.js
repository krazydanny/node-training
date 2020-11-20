// express
const express    = require('express');
var userRoutes   = require('./routes/userRoutes');
var app    		 = express();
//const mongoose  = require('mongoose');

app.use( '/users', userRoutes );


// default handler for uncaught exceptions
/*
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
*/

app.listen( 8000 );