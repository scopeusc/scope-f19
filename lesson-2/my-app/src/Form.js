import React, { Component } from 'react';

class Form extends Component {
  handleSubmit(event) {
    document.getElementById("submitbutton").style.backgroundColor = "black"
    document.getElementById("response").innerHTML = "Hello " + document.getElementsByName("firstname")[0].value
  }

  render(){
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          First name: <br />
          <input type="text" name="firstname" placeholder="William"/><br />
          Last name: <br />
          <input type="text" name="lastname" placeholder="Yang"/><br /><br />
          I am a:<br />
          <input type="radio" value="freshman" name="year"/> Freshman<br />
          <input type="radio" value="sophomore" name="year"/> Sophomore<br />
          <input type="radio" value="junior" name="year"/> Junior<br />
          <input type="radio" value="senior" name="year"/> Senior<br /><br />
          <input type="submit" id="submitbutton" value="Submit" />
          <div id="response"></div>
        </form>
      </div>
    );
  }
}

export default Form;
