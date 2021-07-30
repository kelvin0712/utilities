function dedupBy(array, iteratee) {
  const set = new Set();

  return array.filter((element) => {
    const newElement = iteratee && iteratee(element);
    return set.has(newElement) ? false : set.add(newElement);
  });
}

export default dedupBy;
