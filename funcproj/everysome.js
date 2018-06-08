module.exports = function checkUsersValid(goodUsers) {
    return function allUsersValid(currUsers) {
        return currUsers.every((curr) => {
            return goodUsers.some((good) => {
                return curr.id === good.id;
            })
        })
    }
}
