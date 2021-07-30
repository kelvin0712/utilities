function dedupBy(array, iteratee) {
  if (!Array.isArray(array) || !array.length) {
    return [];
  }

  const set = new Set();

  return array.filter((element) => {
    const newElement = iteratee && iteratee(element);
    return set.has(newElement) ? false : set.add(newElement);
  });
}

export default dedupBy;
