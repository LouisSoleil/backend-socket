/*
var app = require('./app');
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app));
});
*/

const app = require("express")();
const httpServer = require("http").createServer(app);
const options = { 
    cors: {
        origin: ["http://localhost:4200"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
};
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST", "HEAD", "OPTIONS", "PUT", "DELETE"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hey Socket.io</h1>');
});

io.on("connection", socket => {
    console.log('a user is connected');
    socket.emit("hello", "world");
});

httpServer.listen(3000);


