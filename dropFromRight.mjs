import toInteger from "./toInteger.mjs";

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @param {Array} array The array to query.
 * @param {number} [number=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * dropRight([1, 2, 3])
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 5)
 * // => []
 *
 * dropRight([1, 2, 3], 0)
 * // => [1, 2, 3]
 */

function dropFromRight(array, number = 1) {
  if (!Array.isArray(array) || !array.length) {
    return [];
  }

  number = array.length - toInteger(number);

  return array.slice(0, number < 0 ? 0 : number);
}

export default dropFromRight;
