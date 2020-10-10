class Socket{
  constructor (updateCallback, url) {
    this.type = "Socket";
    this.url = url;
    this.updateCallback = updateCallback;
    this.webSocket = undefined;
  }

  mount () {
    try {
      this.webSocket = new WebSocket(this.url);
      this.webSocket.onmessage = this.onMessage;
      console.log("Socket Successfully Started")
    } catch (error) {
      console.log("Socket Failed To Mount");
      console.log(error)
    }
  }

  onMessage = (event) => {
    let messageData = JSON.parse(event.data)
    this.updateCallback(messageData)
  }

  close () {
    try {
      this.webSocket.close();
      this.webSocket = undefined
      console.log("Socket Closed Successfully")
    } catch (error) {
      console.log("Error When Closing Socket")
      console.log(error)
    }
  }
}

export default Socket;