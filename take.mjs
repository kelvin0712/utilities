import toInteger from "./toInteger.mjs";

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @param {Array} array The array to query.
 * @param {number} [number=1] The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * take([1, 2, 3])
 * // => [1]
 *
 * take([1, 2, 3], 5)
 * // => [1, 2, 3]
 *
 * take([1, 2, 3], 0)
 * // => []
 */

function take(array, number = 1) {
  if (!Array.isArray(array) || !array.length) {
    return [];
  }

  return array.slice(0, toInteger(number));
}

export default take;
