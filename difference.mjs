/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @param {Array} array The array to inspect.
 * @param {Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */

function difference(array, arrayToCompare = []) {
  if (!Array.isArray(array) || !array.length) {
    return [];
  }

  if (!Array.isArray(arrayToCompare) || !arrayToCompare.length) {
    return array;
  }

  return array.filter((element) => !arrayToCompare.includes(element));
}

export default difference;
