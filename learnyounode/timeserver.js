var port = process.argv[2]
var net = require('net')

var server = net.createServer((socket) => {
    var d = new Date()
    var zeroPad = (str, targetLen) => {
        str = str.toString()
        while (str.length < targetLen) {
            str = "0" + str;
        }
        return str
    }
    var dateStr = d.getFullYear() + "-" + zeroPad(d.getMonth()+1,2) + "-" + zeroPad(d.getDate(),2) + " " + zeroPad(d.getHours(),2) + ":" + zeroPad(d.getMinutes(),2) + '\n';
    socket.end(dateStr)
})

server.listen(port)

