
function createResult(error, data){
    const result = {}
        result['status'] = error
        result['error'] = data
    return result
}

module.exports = createResult