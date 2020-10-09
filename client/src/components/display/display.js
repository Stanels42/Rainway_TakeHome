import React from "react";

import Buttons from './buttons';

import './display.css';

class Display extends React.Component {
  constructor (props) {
    super(props)
    this.background = './images/controller-Base.png'
    this.xButton = './images/controller-blue-pressed.png';
    this.yButton = './images/controller-yellow-pressed.png';
    this.aButton = './images/controller-green-pressed.png';
    this.bButton = './images/controller-red-pressed.png';
    this.leftStick = './images/controller-LStick.png';
    this.rightStick = './images/controller-RStick.png';
  }

  render () {
    return (
      <div id="ControllerDisplay">
        <img class="DisplayImage" id="DisplayBackground" src={this.background}/>
        <Buttons input={{x: true, y:false, a:false, b:false}}/>
      </div>
    )
  }
}
export default Display;