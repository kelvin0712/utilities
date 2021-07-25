import toInteger from "./toInteger.mjs";

function drop(array, number = 1) {
  if (!Array.isArray(array)) {
    return [];
  }

  number = toInteger(number)

  return array.slice(number, array.length);
}

export default drop
