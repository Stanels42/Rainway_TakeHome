This is a Python WebSockets server that streams JSON gamepad data at 60 packets-per-second to any connecting client.

To run it, try `pip3 install websockets` and then `python3 server.py [host] [port]`.

To view the example solution, run `python3 server.py localhost 8765` and open solution.html in your browser.

Each JSON message looks like this:

    {
      "thumbsticks": {
        "left": {"x": 0.875, "y":  0.997},
        "right": {"x": 0.314, "y": -0.819}
      },
      "buttons": {
        "a": false,
        "b": true,
        "x": false,
        "y": false
      }
    }

