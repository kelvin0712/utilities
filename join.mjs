
function join(array, separator = ', ') {
    let result = ''
    const count = array.length - 1
    array.forEach((item, index) => {
        result += item
        if (index !== count) { result += separator }
    }
    )
    return result
}

export default join;