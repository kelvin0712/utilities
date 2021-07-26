/**
 * Create a filtered array with all truthy values
 *
 * @param {Array} array The array to process
 * @returns {Array} Returns a new filtered array
 * @example
 *
 * compact([1, 2, 0, null, undefined, ''])
 * // => [1, 2]
 */

function compact(array) {
  if (typeof array !== "array" || !array.length) {
    return [];
  }

  return array.filter((element) => !!element);
}

export default compact;
