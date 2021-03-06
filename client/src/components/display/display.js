import React from "react";

import Buttons from './buttons';
import ThumbSticks from './thumbsticks'

import './display.css';

function display (props) {
  return (
    <div id="ControllerDisplay">
      <img class="DisplayImage" id="DisplayBackground" src='./images/controller-Base.png' alt=""/>
      <Buttons input={props.input['buttons']}/>
      <ThumbSticks input={props.input['thumbsticks']}/>
    </div>
  )
}


export default display;