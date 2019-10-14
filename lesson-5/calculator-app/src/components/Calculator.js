// Imports.
import React from 'react';
import CalculatorTitle from './CalculatorTitle.js';
import OutputScreen from './OutputScreen.js';
import Button from './Button.js';

class Calculator extends React.Component {
    constructor() {
      super();

      // set our default state
      this.state = {
        question: '',
        answer: ''
      }

      // Bind our handleClick method (sets 'this' explicitly
      // to refer to this componenent) We did this because 'this'
      // would refer to the source of the click events
      this.handleClick = this.handleClick.bind(this);
    }

    // our method to handle all click events from our buttons
    handleClick(event){

      // get the value from the target element (button)
      const value = event.target.value;

      switch (value) {
        case '=': {

          // if it's an equal sign, use the eval module
          // to evaluate the question ,convert the answer
          // (in number) to String
          if (this.state.question!=='')
          {
              var ans='';
                try
                  {
                      ans = eval(this.state.question);
                  }
                  catch(err)
                  {
                      this.setState({answer: "Math Error"});
                  }
                  if (ans===undefined)
                      this.setState({answer: "Math Error"});

                  // update answer in our state.
                  else
                      this.setState({ answer: ans , question: ''});
                  break;
              }
        }
        case 'Clear': {

          // if it's the Clears sign, just clean our
          // question and answer in the state
          this.setState({ question: '', answer: '' });
          break;
        }

        case 'Delete': {
          var str = this.state.question;
            str = str.substr(0,str.length-1);
            this.setState({question: str});
            break;
        }

      default: {

          // for every other command, update the answer in the state
          this.setState({ question: this.state.question += value})
          break;
        }
      }
    }

    render()
    {
    return (
    <div className="frame">
    <CalculatorTitle value="React Calculator"/>
    <div class="mainCalc">
    <OutputScreen question={this.state.question} answer = {this.state.answer}/>
    <div className="button-row">
      <Button handleClick = {this.handleClick} label={'Clear'}/>
      <Button handleClick = {this.handleClick} label={'Delete'}/>
      <Button handleClick = {this.handleClick} label={'.'}/>
      <Button handleClick = {this.handleClick} label={'/'}/>
    </div>
    <div className="button-row">
      <Button handleClick = {this.handleClick} label={'7'}/>
      <Button handleClick = {this.handleClick} label={'8'}/>
      <Button handleClick = {this.handleClick} label={'9'}/>
      <Button handleClick = {this.handleClick} label={'*'}/>
    </div>
    <div className="button-row">
      <Button handleClick = {this.handleClick} label={'4'}/>
      <Button handleClick = {this.handleClick} label={'5'}/>
      <Button handleClick = {this.handleClick} label={'6'}/>
      <Button handleClick = {this.handleClick} label={'-'}/>
    </div>
    <div className="button-row">
      <Button handleClick = {this.handleClick} label={'1'}/>
      <Button handleClick = {this.handleClick} label={'2'}/>
      <Button handleClick = {this.handleClick} label={'3'}/>
      <Button handleClick = {this.handleClick} label={'+'}/>
    </div>
    <div className="button-row">
      <Button handleClick = {this.handleClick} label={'0'}/>
      <Button handleClick = {this.handleClick} label={'='}/>
    </div>
    </div>
    </div>
    );
  }
}

// Export Calculator Component.
export default Calculator;
