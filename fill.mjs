/**
 * Mutates the original `array` with `n` values that get passed into the function.
 * *Note: this function will mutate the original array
 *
 * @param {Array} array The array to query.
 * @param {value} any The value of the array.
 * @param {start} number The start position.
 * @param {end} number The last position.
 * @returns {Array} Returns the new mutated `array`.
 * @example
 *
 * fill(array, 'a');
 * // => ['a', 'a', 'a']
 *
 * fill(Array(3), 2);
 * // => [2, 2, 2]
 *
 * fill([4, 6, 8, 10], '*', 1, 3);
 * // => [4, '*', '*', 10]
 */

function fill(array, value, start = 0, end = array.length) {
  if (!Array.isArray(array) || !array.length) {
    return [];
  }

  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  return array;
}

export default fill;
