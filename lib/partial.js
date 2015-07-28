'use strict';

// MODULES //

var betainc = require( 'compute-betainc/lib/numbers.js' );


// FUNCTIONS //

var pow = Math.pow;

// PARTIAL //

/**
* FUNCTION: partial( v )
*	Partially applies degrees of freedom `v` and returns a function for evaluating the cumulative distribution function (CDF) for a Student t distribution.
*
* @param {Number} v - degrees of freedom
* @returns {Function} CDF
*/
function partial( v ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Student t distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {
		var z, x2, p;

		if ( x === 0 ) {
			return 0.5;
		}
		x2 = pow( x, 2 );
		if ( v > 2 * x2 ) {
			z = x2 / ( v + x2 );
			p = betainc.upper( z, 0.5, v / 2 ) / 2;
		} else {
			z = v / ( v + x2 );
			p = betainc.lower( z, v / 2, 0.5 ) / 2;
		}
		return x > 0 ? 1 - p : p;
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
