import React from "react";

class Socket{
  constructor (url, updateCallback) {
    this.type = "Socket"
    this.url = url;
    this.updateCallback = updateCallback;

    this.webSocket = undefined;
  }

  mount () {
    try {
      this.webSocket = new WebSocket(this.url);
      this.webSocket.onmessage = this.updateCallback;
      console.log("Socket Successfully Started")
    } catch (error) {
      console.log("Socket Failed To Mount");
      console.log(error)
    }
  }

  close () {
    try {
      this.webSocket.close();
      console.log("Socket Closed Successfully")
    } catch (error) {
      console.log("Error When Closing Socket")
      console.log(error)
    }
  }

}

export default Socket;