function loadUsers(userIds, load, done) {
    var final = [];
    var completed = 0
    userIds.forEach(function(userId, index) {
        load(id, function(result) {
            final[index] = userid
            if (++completed === userIds.length) return done(final)
        })
    });
}

module.exports = loadUsers
