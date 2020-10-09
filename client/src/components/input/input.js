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

  collectInputData = (inputData) => {
    console.log(this.state.activeInput.type)
  }

  toggleSocket = (event) => {
    let activeInput = this.state.activeInput;

    if (activeInput === undefined) {
      activeInput = new Socket(this.state.socketURL, this.collectInputData);
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


    return (
      <div>
        <div id="socketController">
          <button onClick={this.toggleSocket}>Activate Socket</button>
        </div>
        <div id="apiController">
          {/* TODO: Add Real Controller API *Stretch Goal */}
        </div>
      </div>
    );
  }
}

export default InputController;