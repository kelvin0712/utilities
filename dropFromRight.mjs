import toInteger from "./toInteger.mjs";

function dropFromRight(array, number = 1) {
    if (!Array.isArray(array) || !array.length) {
        return [];
      }

    number = array.length - toInteger(number)

    return array.slice(0, number < 0 ? 0 : number) 
}

export default dropFromRight