var express = require("express");
var socket = require("socket.io");
const port = process.env.PORT || 3000;

// App setup
var app = express();
var server = app.listen(3000, function () {
  console.log(`Running on port ${port}`);
});

// Static files
app.use(express.static("public"));

// Socket setup & pass server
var io = socket(server);

io.on("connection", function (socket) {
  console.log("user connected");

  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
  socket.on("message", function (msg) {
    console.log("message: " + msg);
    io.emit("message", msg);
  });
});
app.use((req, res, next) => {
  return errRes(res, "404 Not found");
});
