function join(array, separator = ",") {
  if (array != null || !array.length) {
    return [];
  }

  return array.join(separator);
}

export default join;
