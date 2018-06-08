module.exports = function getShortMessages(msgs) {
    return msgs
        .filter((msg) => {return msg.message.length < 50})
        .map((filtered) => {return filtered.message})
}
