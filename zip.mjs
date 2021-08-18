function zip(...arrays) {
  const result = [];
  let index = 0;
  let length = 0;

  arrays.forEach((array) => {
    length = Math.max(array.length, length);
  });

  while (index < length) {
    result[index] = arrays.map((array) => {
      return array[index];
    });
    index++;
  }

  return result;
}

export default zip;
