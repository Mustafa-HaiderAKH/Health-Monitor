var express = require("express");
var socket = require("socket.io");
const port = process.env.PORT || 3000;

// App setup
var app = express();
var server = app.listen(port, function () {
  console.log(`Running on port ${port}`);
});

// Static files
app.use(express.static("public"));

// Socket setup & pass server
var io = socket(server);

io.on("connection", function (socket) {
  console.log("user connected");

  socket.on("message", function (msg) {
    console.log("message: " + msg);
    io.emit("message", msg);
  });

  socket.on("privatechat", function (msg) {
    io.to("myRoom").emit("privatechat", msg);
  });
  socket.on("joinRoom", function () {
    socket.join("myRoom");
    console.log("user joined");
  });
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});
app.use((req, res, next) => {
  return res.json({ msg: "404 Not found" });
});
