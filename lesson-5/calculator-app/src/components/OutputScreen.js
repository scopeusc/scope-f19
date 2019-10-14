import React from 'react';
// Import Output Screen Row.
import OutputScreenRow from './OutputScreenRow.js';

// Functional Component.
// Use to hold two Screen Rows.
const OutputScreen = (props) => {
  return (
    <div className="screen">
      <OutputScreenRow value = {props.question}/>
      <OutputScreenRow value = {props.answer}/>
    </div>
  )
}

export default OutputScreen;
