'use strict';

// MODULES //

var partial = require( './partial.js' );


// CDF //

/**
* FUNCTION: cdf( out, matrix, v )
*	Evaluates the cumulative distribution function (CDF) for a Student t distribution with degrees of freedom `v` for each matrix element.
*
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @param {Number} v - degrees of freedom
* @returns {Matrix} output matrix
*/
function cdf( y, x, v ) {
	var len = x.length,
		fcn,
		i;
	if ( y.length !== len ) {
		throw new Error( 'cdf()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	fcn = partial( v );
	for ( i = 0; i < len; i++ ) {
		y.data[ i ] = fcn( x.data[ i ] );
	}
	return y;
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
