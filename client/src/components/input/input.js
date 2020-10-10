import React from 'react';

import Socket from './socket';
import ControllerInput from './controllerInput';

import Display from '../display/display'

class InputController extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      socketURL: 'ws:/localhost:4000',
      activeInput: undefined,
      inputData: undefined,
    }
  }

  // Call back used by the different input types to send data
  collectInputData = (inputData) => {
    this.setState({
      inputData: inputData,
    })
  }


  toggleSocket = (event) => {
    let activeInput = this.state.activeInput;

    if (activeInput === undefined) {
      activeInput = new Socket(this.collectInputData, this.state.socketURL);
      activeInput.mount();
      this.setState ({
        activeInput: activeInput,
      })
    } else if (this.state.activeInput.type === "Socket") {
      activeInput.close();
      this.setState({
        activeInput: undefined
      })
    }
  }


  toggleController = (event) => {
    let activeInput = this.state.activeInput;

    if (activeInput === undefined) {
      activeInput = new ControllerInput(this.collectInputData);
      activeInput.mount()
      this.setState ({
        activeInput: activeInput,
      })
    } else if (this.state.activeInput.type === "Controller") {
      activeInput.close();
      this.setState({
        activeInput: undefined
      })
    }
  }


  render () {

    let inputType = this.state.activeInput ? this.state.activeInput.type : undefined;

    let socketButtonText = inputType !== "Socket" ? "Activate Socket" : "Deactivate Socket"

    let controllerButtonText = inputType !== "Controller" ? "Activate Controller" : "Deactivate Controller"

    return (
      <div>
        <div id="socketController">
          <button onClick={this.toggleSocket}>{socketButtonText}</button>
        </div>
        <div id="controllerAPI">
          <button onClick={this.toggleController}>{controllerButtonText}</button>
        </div>
        <Display input={this.state.inputData}/>
      </div>
    );
  }
}

export default InputController;