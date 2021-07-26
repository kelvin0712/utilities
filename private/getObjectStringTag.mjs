/**
 * This function return a string tag which represents the object
 * See more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString?retiredLocale=vi
 */

function getObjectStringTag(value) {
  return Object.prototype.toString.call(value);
}

export default getObjectStringTag;
