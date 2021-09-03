const socket = require('../server/socket');

global.count = 0;

exports.live = (req, res, next) => {
    setInterval(() => {
        global.count += 1;
        socket.socketConnection.socket.emit('count event : ', global.count):
    }, 2000);
}