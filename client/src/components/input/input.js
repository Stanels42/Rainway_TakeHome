import React from 'react';

import Socket from './socket'

class InputController extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      socketURL: 'ws:/localhost:4000',
      activeInput: undefined,
    }
  }

  // Call back used by the different API types to send data
  collectInputData = (inputData) => {
    console.log(inputData)
  }

  toggleSocket = (event) => {
    let activeInput = this.state.activeInput;

    if (activeInput === undefined) {
      activeInput = new Socket(this.collectInputData, this.state.socketURL);
      activeInput.mount();
      this.setState ({
        activeInput: activeInput,
      })
    } else if (this.state.activeInput.type) {
      activeInput.close();
      this.setState({
        activeInput: undefined
      })
    } else {
      throw "Unrecognized Input Type"
    }
  }

  render () {

    let inputType = this.state.activeInput ? this.state.activeInput.type : undefined;

    let socketControllerText = inputType !== "Socket" ? "Activate Socket" : "Deactivate Socket"

    return (
      <div>
        <div id="socketController">
          <button onClick={this.toggleSocket}>{socketControllerText}</button>
        </div>
        <div id="apiController">
          {/* TODO: Add Real Controller API *Stretch Goal */}
        </div>
      </div>
    );
  }
}

export default InputController;