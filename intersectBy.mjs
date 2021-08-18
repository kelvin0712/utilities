function intersectBy(...arrays, iteratee) {
  if (!arrays.length) {
        return [];
      }
    
  return baseIntersect(arrays, iteratee);
} 

export default intersectBy;