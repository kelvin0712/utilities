import isSymbol from "./isSymbol.mjs";

/** Used to detect unsigned integer values. */
const isUnInt = /^(?:0|[1-9]\d*)$/;

/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991;

function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;

  return (
    !!length &&
    (typeof value === "number" || (!isSymbol(value) && isUnInt.test(value))) &&
    value < length &&
    value > -1 &&
    value % 1 == 0
  );
}

export default isIndex;
