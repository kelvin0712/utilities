/**
 * Removes all given values from `array` using.
 *
 * **Note:** This method mutates `array`.
 *
 * @param {Array} array The array to modify.
 * @param {...*} [values] The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 * pull(array, ['a', 'c'])
 * console.log(array)
 * // => ['b', 'b']
 */

function pull(array, ...values) {
  if (array == null && values == null) {
    return;
  }

  if (!values.length) {
    return array;
  }

  let indexCounter = 0;

  while (indexCounter < array.length) {
    if (values.includes(array[indexCounter])) {
      array.splice(indexCounter, 1);
    } else {
      indexCounter++;
    }
  }

  return array;
}

export default pull;
