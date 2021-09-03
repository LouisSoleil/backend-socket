const app = require("express")();
const httpServer = require("http").createServer(app);
const options = { 
    cors: {
        origin: ["http://localhost:4200"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
};
const io = require("socket.io")(httpServer, options);

io.on("connection", socket => {});

httpServer.listen(3000);