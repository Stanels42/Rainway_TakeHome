import React from 'react';

function buttons (props) {
  let value = props.input;

  return (
    <div div="buttons">
        <img class={`DisplayImage ${value["x"] ? "" : "hidden"}`} id="xButton" src='./images/controller-blue-pressed.png'/>
        <img class={`DisplayImage ${value["y"] ? "" : "hidden"}`} id="yButton" src='./images/controller-yellow-pressed.png'/>
        <img class={`DisplayImage ${value["a"] ? "" : "hidden"}`} id="aButton" src='./images/controller-green-pressed.png'/>
        <img class={`DisplayImage ${value["b"] ? "" : "hidden"}`} id="bButton" src='./images/controller-red-pressed.png'/>
    </div>
  )
}

export default buttons;