/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */

function chunk(array, size = 1) {
  if (!array.length || parseInt(size) < 1) {
    return [];
  }

  let counter = 0;
  let newChunkedArray = [];

  while (counter < array.length) {
    const slicedArray = array.slice(counter, counter + size);
    newChunkedArray.push(slicedArray);
    counter += size;
  }

  return newChunkedArray;
}
