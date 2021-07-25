import isObject from "./isObject.mjs"
import isSymbol from "./isSymbol.mjs"

/** Used to match leading and trailing white spaces */ 
const reTrim = /^\s+|\s+$/g

/** Used to detect binary string values. */
const reIsBinary = /^0b[01]+$/i

/** Used to detect octal string values. */
const reIsOctal = /^0o[0-7]+$/i

/** Used to detect bad signed hexadecimal string values. */
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i

/**
 * This convert value to a number
 */

function toNumber(value) {
    if (typeof value === "number") {
        return value
    } 

    // In any cases that users may want to pass in object or function?
    if (isSymbol(value) || isObject(value)) {
        return NaN
    }

    if (typeof value !== 'string') {
        return value === 0 ? value : Number(value)
    }

    value = value.replace(reTrim, '')

    const isBinary = reIsBinary.test(value)
    const isOctal = reIsOctal.test(value)

    return (isBinary || isOctal) ? parseInt(value.slice(2), isBinary ? 2 : 8) : (reIsBadHex.test(value) ? NaN : Number(value))
}

export default toNumber


