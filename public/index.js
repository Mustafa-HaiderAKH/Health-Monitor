var socket = io.connect();

// Query DOM
var message = document.getElementById("message"),
  handle = document.getElementById("handle"),
  btn = document.getElementById("send"),
  private = document.getElementById("private"),
  output = document.getElementById("output"),
  privateoutput = document.getElementById("private_output");

// Emit events

// Listen for events
socket.on("message", function (data) {
  output.innerHTML = `<P> The temperature ${data}</p>`;
});
socket.on("chat", function (data) {
  output.innerHTML = `<P>${data.message}</p>`;
});
socket.on("private_message", function (data) {
  privateoutput.innerHTML = `<P>${data.message}</p>`;
});
socket.on("connect", () => {
  console.log(socket.id);
});
btn.addEventListener("click", function () {
  console.log(message.value);
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
  console.log(message.value);

  message.value = "";
});
private.addEventListener("click", function () {
  socket.emit("private_message", socket.id, {
    message: message.value,
    handle: handle.value,
  });
  console.log(`The private message is ${message.value}`);

  message.value = "";
});
