import toNumber from "./private/toNumber.mjs"

function toInteger(value) {
    const number = toNumber(value)

    return parseInt(number)
}

export default toInteger 