import baseIntersect from "./private/baseIntersect.mjs";

function intersect(...arrays) {
  if (!arrays.length) {
    return [];
  }

  return baseIntersect(arrays);
}

export default intersect;
