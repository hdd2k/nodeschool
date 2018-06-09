function getDependencies(tree) {
    var helper = function(dep) {
        if ((dep === null) || (dep === {})) return []
        var total = []
        for (let key in dep) {
            var total = total.concat([key + '@' + dep[key]['version']])
            if (dep.hasOwnProperty('dependencies')) {
                var total = total.concat(helper(dep['dependencies']))
            }
        }
        return total
    }

    if ((tree === null) || (tree === {}) || !(tree.hasOwnProperty('dependencies'))) return []
    return helper(tree['dependencies'])
}

module.exports = getDependencies
