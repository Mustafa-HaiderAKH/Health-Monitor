var socket = io.connect();

// Query DOM
var message = document.getElementById("message"),
  handle = document.getElementById("handle"),
  btn = document.getElementById("send"),
  btn2 = document.getElementById("open"),
  btn3 = document.getElementById("close"),
  output = document.getElementById("output"),
  feedback = document.getElementById("feedback");

// Emit events
btn.addEventListener("click", function () {
  console.log(message.value);
  socket.emit("message", {
    message: message.value,
    handle: handle.value,
  });
  message.value = "";
});
btn2.addEventListener("click", () => {
  output.innerHTML +=
    "<p><strong>" + "The tempature is   " + "data" + "c" + "</p>";
});

// Listen for events
socket.on("message", function (data) {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><strong>" + "The tempature is   " + data + "c" + "</p>";
});
