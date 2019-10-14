import React from 'react';

// Create Functional Component.
// Takes title as props.value.
const CalculatorTitle = (props) => {
  return (
    <div className="calculator-title">
      { props.value }
    </div>
  )
}

export default CalculatorTitle; 
