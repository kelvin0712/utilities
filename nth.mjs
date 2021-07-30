import isIndex from "./private/isIndex.mjs";

/**
 * Gets the n-th element of the `array`.
 *
 * @param {Array} array The array to query.
 * @param {index} [number = 0] The index of the element.
 * @returns {*} Returns the element of the array.
 * @example
 *
 * nth([1, 2, 3], -1)
 * // => 3
 *
 */

function nth(array, index = 0) {
  if (!Array.isArray(array) || !array.length) {
    return;
  }

  index += index < 0 ? array.length : 0;

  return isIndex(index, array.length) ? array[index] : undefined;
}

export default nth;
