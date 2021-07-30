function intersect(...arrays) {
  if (!arrays.length) {
    return [];
  }

  const map = new Map();
  const result = [];

  arrays.flat(Infinity).forEach((element) => {
    if (!map.has(element)) {
      map.set(element, 0);
    }
    map.set(element, map.get(element) + 1);
  });

  map.forEach((value, key) => {
    if (value > 1) {
      result.push(key);
    }
  });

  return result;
}

export default intersect;
