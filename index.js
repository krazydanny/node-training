// express
const express    = require('express');
var userRoutes   = require('./routes/userRoutes');
var app    		 = express();
//const mongoose   = require('mongoose');

app.use( '/users', userRoutes );


app.listen( 8000 );