const { createServer } = require("node:http");
const express = require("express");

const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  socket.on("user:join", (msg) => {
    socket.broadcast.emit("user:new", msg);
  });
});

server.listen(3001, () => {
  console.log("server running at http://localhost:3001");
});
