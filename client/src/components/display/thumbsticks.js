import React from 'react';

function displayThumbSticks (props) {
  let leftStyle, rightStyle = {};

  if (props.input) {
    leftStyle = calculateImagePosition(props.input['left']);
    rightStyle = calculateImagePosition(props.input['right']);
  }

  return (
    <div>
      <img class="DisplayImage" id="leftStick" src='./images/controller-LStick.png' style={leftStyle} alt=""/>
      <img class="DisplayImage" id="rightStick" src='./images/controller-RStick.png'  style={rightStyle} alt=""/>
    </div>
  );
}


function calculateImagePosition (inputData) {

  let data = calculateOffset(inputData);

  return {
    "marginTop": `${data.yOffset}px`,
    "marginLeft": `${data.xOffset}px`,
  };
}

// Take the values and calculate the position
function calculateOffset (vector) {
  let maxOffset = 30; //Max # of Pixels the Images will move from center

  let horizontalOffset = vector["x"] * maxOffset;
  let verticalOffset = vector["y"] * maxOffset

  return {xOffset: horizontalOffset, yOffset: verticalOffset}
}

export default displayThumbSticks;