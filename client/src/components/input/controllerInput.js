
class ControllerInput {

  constructor (updateCallback) {
    this.type = "Controller";
    this.controller = undefined;
    this.updateCallback = updateCallback;
  }


  mount () {
    window.addEventListener("gamepadconnected", this.controllerConnect);
    window.addEventListener("gamepaddisconnected", this.controllerDisconnect)
    
    // Used for reconnecting to a gamepad
    if (navigator.getGamepads().length > 0) {
      this.controller = navigator.getGamepads()[0];
      this.getInputs()
    }

    console.log("Controller Input Activated")
  }


  async getInputs () {    
    while (this.controller) {
      let buttonInputs = this.controller["buttons"];
      let buttons = {
        "a": buttonInputs[0].pressed,
        "b": buttonInputs[1].pressed,
        "x": buttonInputs[2].pressed,
        "y": buttonInputs[3].pressed,
      }

      let thumbstickInputs = this.controller["axes"]
      let thumbsticks = {
        "left": {
          "x": thumbstickInputs[0],
          "y": -thumbstickInputs[1],
        },
        "right": {
          "x": thumbstickInputs[3],
          "y": -thumbstickInputs[4],
        }
      }

      let controllerInputs = {
        "buttons": buttons,
        "thumbsticks": thumbsticks,
      }

      this.updateCallback(controllerInputs)
      await new Promise(r => setTimeout(r, 4));
    }
  }


  close () {
    delete this.controller;
    window.removeEventListener("gamepadconnected", this.controllerConnect);
    window.removeEventListener("gamepaddisconnected", this.controllerDisconnect);
  }


  controllerConnect = (event) => {
    console.log("Controller Found")
    let controllers = navigator.getGamepads();
    if (controllers.length > 0) {
      this.controller = controllers[0];
    }

    this.getInputs()
  }


  controllerDisconnect (event) {
    console.log("Controller Lost")
    this.controller = undefined;
  }
}

export default ControllerInput;