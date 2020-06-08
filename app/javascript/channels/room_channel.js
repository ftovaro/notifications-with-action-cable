import consumer from "./consumer"

window.onload = function() {
  const el = document.getElementById("room")
  const room_id = el.getAttribute("data-room-id")

  consumer.subscriptions.create({ channel: "RoomChannel", room_id }, {
    connected() {
      console.log("Ready to work");
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      // Called when there's incoming data on the websocket for this channel
      console.log(data);
    }
  });
};
