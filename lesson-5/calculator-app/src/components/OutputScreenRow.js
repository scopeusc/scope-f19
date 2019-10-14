import React from 'react';

// Functional Component.
// Used to show Question/Answer.
const OutputScreenRow = (props) => {
  return (
    <div className="screen-row">
      <input type="text" readOnly value = {props.value}/>
    </div>
  )
}

export default OutputScreenRow;
