
exports.exports = ( req, res, next ) => {

	obj = {
		name: "Dan"
	};

	json = {
		id: "some",
		name: obj.name,
	};

	attr = 'name';

	console.log( json[attr] );

	res.json( json );
}


exports.exports = ( req, res, next ) => {

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