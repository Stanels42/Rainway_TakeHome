import React from 'react';

function buttons (props) {
  let value = props.input;

  return (
    <div div="buttons">
        <img class={`DisplayImage ${value && value["a"] ? "" : "hidden"}`} id="aButton" src='./images/controller-green-pressed.png' alt=""/>
        <img class={`DisplayImage ${value && value["b"] ? "" : "hidden"}`} id="bButton" src='./images/controller-red-pressed.png' alt=""/>
        <img class={`DisplayImage ${value && value["x"] ? "" : "hidden"}`} id="xButton" src='./images/controller-blue-pressed.png' alt=""/>
        <img class={`DisplayImage ${value && value["y"] ? "" : "hidden"}`} id="yButton" src='./images/controller-yellow-pressed.png' alt=""/>
    </div>
  )
}

export default buttons;