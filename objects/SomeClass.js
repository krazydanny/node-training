
class SomeBaseClass {

	// public properties
	property1  = null;
	property2  = 2;

	// static properties - class memory space scope
	static property4 = 'static';

	#property3 = 3;

	constructor ( property1, property2 ) {

		this.property1 = property1;
		this.property2 = property2;
	}

	static someMethod1 (  ) {
		throw new Error('error');
		return this.property4;


	}	

	someMethod2 ( ) {

		return this.property2;
	}

	someMethod3 ( ) {
		return this.property3;
	}
}


module.exports = class SomeClass extends SomeBaseClass {

	propertyA;

	constructor ( a ) {

		super( 2, 8 );
		this.propertyA = a;
	}
}