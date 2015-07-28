'use strict';

// FUNCTIONS //


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

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
