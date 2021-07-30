function join(array, separator = ",") {
  if (!Array.isArray(array) || !array.length) {
    return [];
  }

  return array.join(separator);
}

export default join;
