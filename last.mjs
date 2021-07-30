/**
 * Gets the last element of `array`.
 *
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 *
 * last([])
 * // => undefined
 */
function last(array) {
  if (!Array.isArray(array) || !array.length) {
    return;
  }

  return array != null && array.length ? array[array.length - 1] : undefined;
}

export default last;
