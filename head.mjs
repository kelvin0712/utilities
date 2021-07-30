/**
 * Gets the first element of `array`.
 *
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */

function head(array) {
  if (!Array.isArray(array) || !array.length) {
    return;
  }

  return array != null && array.length ? array[0] : undefined;
}

export default head;
