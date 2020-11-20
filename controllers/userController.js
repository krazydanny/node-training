const SomeClass = require( '../objects/SomeClass.js' );

exports.getById = ( req, res, next ) => {

	obj = new SomeClass( 'a' );

	// static methods and attributes are accessed only though the class, not available in instances
	console.log( SomeClass.someMethod1() );

	// private attributes are treated as undefined
	// trying to access undefined properties is handled by node and does not throw errors
	console.log( obj.property3 );

	// null is not the same ass undefined
	console.log ( undefined == null );

	res.json( obj );
}


exports.create = ( req, res, next ) => {

	obj = {
		name: "Nico"
	};

	json = {
		id: "some",
		name: obj.name,
	};

	attr = 'name';

	console.log( json[attr] );

	res.json( json );
}