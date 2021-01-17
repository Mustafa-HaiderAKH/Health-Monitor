var socket = io.connect();

// Query DOM
var message = document.getElementById("message"),
  handle = document.getElementById("handle"),
  output = document.getElementById("output"),
  send = document.getElementById("send"),
  join = document.getElementById("join");
// Emit events

// Listen for events
socket.on("connect", () => {
  console.log(socket.id);
});
socket.on("message", function (data) {
  output.innerHTML = `<P> The temperature ${data}</p>`;
});
socket.on("privatechat", function (msg) {
  msg.message
    ? msg.handle
      ? (output.innerHTML = `<p>${msg.handle}:${msg.message}</p>`)
      : (output.innerHTML = `<p>anonymous:${msg.message}</p>`)
    : null;
});

join.addEventListener("click", () => {
  console.log("uuu");
  socket.emit("joinRoom");
});
send.addEventListener("click", () => {
  socket.emit("privatechat", {
    message: message.value,
    handle: handle.value,
  });
});
