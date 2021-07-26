import toInteger from "./toInteger.mjs";

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @param {Array} array The array to query.
 * @param {number} [number=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */

function drop(array, number = 1) {
  if (!Array.isArray(array)) {
    return [];
  }

  number = toInteger(number);

  return array.slice(number, array.length);
}

export default drop;
