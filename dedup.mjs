/**
 * Creates a duplicate-free version of an array for equality comparisons,
 * in which only the first occurrence of each element is kept.
 * The order of result values is determined by the order they occur
 * in the array.
 *
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * dedup([2, 1, 2])
 * // => [2, 1]
 */

function dedup(array) {
  if (!Array.isArray(array) || !array.length) {
    return [];
  }

  return Array.from(new Set(array));
}

export default dedup;
