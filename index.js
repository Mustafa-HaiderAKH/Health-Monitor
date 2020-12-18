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

app.use((req, res, next) => {
  return res.json({ msg: "404 Not found" });
});
