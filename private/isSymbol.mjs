import getObjectStringTag from "./getObjectStringTag.mjs";

function isSymbol(value) {
  return (
    typeof value == "symbol" || getObjectStringTag(value) == "[object Symbol]"
  );
}

export default isSymbol;
