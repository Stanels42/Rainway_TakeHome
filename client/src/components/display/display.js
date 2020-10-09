import React from "react";

import './display.css';

class Display extends React.Component {
  constructor (props) {
    super(props)
    this.background = './images/controller-base.png'
  }

  render () {
    return (
      <div id="ControllerDisplay">
        <img class="DisplayBackground" src={this.background}/>
      </div>
    )
  }
}

export default Display;