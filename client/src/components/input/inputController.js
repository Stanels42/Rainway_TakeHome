import React from 'react';

import Socket from './socket';
import ControllerInput from './controllerAPIInput';

import Display from '../display/display'

class InputController extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      socketURL: 'ws:/localhost:4000',
      controllerUpdateRate: 2,
      activeInput: undefined,
      inputData: {},
    };
  }

  // Call back used by the different input types to send data
  collectInputData = (inputData) => {
    this.setState({
      inputData: inputData,
    });
  }


  toggleInput = (event) => {
    let activeInput = this.state.activeInput;

    if (activeInput === undefined) {
      this.selectInputController(event.target.name);

    } else if (activeInput.type === event.target.name) {
      this.closeInput(activeInput);

    } else { //Switching Between Input Types
      this.closeInput(activeInput);
      this.selectInputController(event.target.name);
    }
  }

  selectInputController(inputTypeName) {
    if (inputTypeName === "Controller") {
      this.activateInput(new ControllerInput(this.collectInputData, this.state.controllerUpdateRate));
    } else if (inputTypeName === "Socket"){
      this.activateInput(new Socket(this.collectInputData, this.state.socketURL));
    }
  }

  activateInput (newInput) {
    newInput.mount();
    this.setState ({
      activeInput: newInput,
    });
  }

  closeInput (activeInput) {
    activeInput.close();
    this.setState({
      activeInput: undefined,
      inputData: {},
    });
  }


  render () {

    let inputType = this.state.activeInput ? this.state.activeInput.type : undefined;

    let socketButtonText = inputType !== "Socket" ? "Activate Socket" : "Deactivate Socket";

    let controllerButtonText = inputType !== "Controller" ? "Activate Controller" : "Deactivate Controller";

    return (
      <div>
        <div id="socketController">
          <button onClick={this.toggleInput} name="Socket">{socketButtonText}</button>
        </div>
        <div id="controllerAPI">
          <button onClick={this.toggleInput} name="Controller">{controllerButtonText}</button>
        </div>
        <Display input={this.state.inputData}/>
      </div>
    );
  }
}

export default InputController;