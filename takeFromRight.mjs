import toInteger from "./toInteger.mjs";

/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @param {Array} array The array to query.
 * @param {number} [number=1] The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * takeRight([1, 2, 3])
 * // => [3]
 *
 * takeRight([1, 2, 3], 5)
 * // => [1, 2, 3]
 *
 * takeRight([1, 2, 3], 0)
 * // => []
 */

function takeFromRight(array, number = 1) {
  number = array.length - toInteger(number);

  return array.slice(number < 0 ? 0 : number, array.length);
}

export default takeFromRight;
