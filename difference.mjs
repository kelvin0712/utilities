function difference(array, arrayToCompare = []) {
  if (!Array.isArray(array) || !array.length) {
    return [];
  }

  if (!Array.isArray(arrayToCompare) || !arrayToCompare.length) {
    return array;
  }

  return array.filter((element) => !arrayToCompare.includes(element));
}
