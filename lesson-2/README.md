# Lesson #2: JavaScript & React Project Structure
In this lesson we will learn about JavaScript and work with the ``my-app`` project we created last week in order to understand React and the project structure.

## JavaScript
JavaScript makes web pages dynamic. It has the ability to update and change both HTML and CSS

### Syntax
Declare variables with var.

```js
var someVar = 5;
```
Variable types: number, string, array, object

```js
var myObj = {
	key1: "Hello",
	key2: "world."
};
```

Function syntax:

```js
function myFunction(thing){
	return thing.toUpperCase();
}

myFunction(foo);
```

### Manipulating content

Selectors are helpful for changing attributes of elements.

```js
document.getElementById("demo").style.fontSize = "35px";
```

Events are actions that happen in the browser. The list of events include:
* onchange - An HTML element has been changed
* onclick - The user clicks an HTML element
* onmouseover - The user moves the mouse over an HTML element
* onmouseout - The user moves the mouse away from an HTML element
* onkeydown - The user pushes a keyboard key
* onload - The browser has finished loading the page

```html
<html>
   <head>   
      <script type = "text/javascript">
            function sayHello() {
               alert("Hello World")
            }
      </script>      
   </head>
   
   <body>    
      <form>
         <input type = "button" onclick = "sayHello()" value = "Say Hello" />
      </form>      
   </body>
</html>
```

### How to Reference JavaScript

JavaScript can be included in your web page in a few ways. The first is in a script tag as shown above. You can also include a separate JavaScript file.

```html
<script src="script.js"></script>
```

## React


### If you weren't here last week:

Type the following command to install React, React DOM, and generate a boilerplate version of a React application.

```
npx create-react-app my-app
cd my-app
npm start
```

Open http://localhost:3000/ in your favorite browser to see your app.

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg  
```
For the project to build, these files must exist with exact filenames:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You need to put any JS and CSS files inside `src`

`npm start` runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

Open up the my-app project you just made in Atom or your preferred editor. Locate the src/App.js file. Change the text inside of the ``<p> </p>`` tags as shown below.

```html
<div className="App">
	<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Scope students!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
	</header>
</div>
```

If you left the terminal running, you should be able to switch over to your browser (http://localhost:3000/) and see the update.

Now your React application is up and running and we can begin adding functionality.


Open the App.js file and remove all unnecessary HTML code as shown:

```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to Scope Fall 2019</h2>
      </div>
    );
  }
}

export default App;
```
The content in the render block may look similar to HTML, but it is actually JSX. JSX allows you to mix HTML and JavaScript.

Now lets add in some variables. A variable is set in JSX by curly braces:

```js
class App extends Component {
  render() {
    var helloWorld = 'Welcome to Scope Fall 2019';
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
      </div>
    );
  }
}
```

### Adding more components

Now lets work with multiple components. Create a file in the `src/` directory of your project called `Title.js`. Insert the following into the file:

```js
import React, { Component } from 'react';

class Form extends Component {
  render(){
    return (
      <div className="Form">
        <h1> Testing form component </h1>
      </div>
    );
  }
}

export default Form;
```

In `App.js`, add the following line at the top of the file:

```js
import Form from './Form.js';
```

Then in the body of `App.js`, add the following line somewhere in your div tag:

```js
<Form />
```

You should see the words "Testing form component" on your web page when you navigate back to localhost. You have successfully added an additional component to your web page.


Let's add a little more to the form component. Replace the current div tag in `Form.js` with the following code:

```js
import React, { Component } from 'react';

class Form extends Component {
  render(){
    return (
      <div className="Form">
        <form>
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
        </form>
      </div>
    );
  }
}

export default Form;
```
As you can see, we added a form with different types of input tags. Text, radio, and submit are common types of html input tags. Navigate to your browser to see what they look like.
 
### Adding functionality
As you can see, the page isn't actually functional and clicking submit doesn't do anything. Depending on what you what you want to do with the information, you can handle the form different ways, but I will show you today how to handle form data with JavaScript.

Change the form to call a js function when submitted.

```js
<form onSubmit={this.handleSubmit}>
```

Add the following code inside of the Form component, right outside the render block.
 
```js
handleSubmit(event) {
    document.getElementById("submitbutton").style.backgroundColor = "black"
    document.getElementById("response").innerHTML = "Hello " + document.getElementsByName("firstname")[0].value
}
```

Then add a div where the response will show up at the bottom of the form.

```js
<div id="response"></div>
```

Reload the page, enter your info and press submit. The page should be updated with the button turning black and your name appearing on the bottom.

### Adding some styling

If you look at the top of your `App.js` file, you'll see the following line:

```js
import './App.css';
```

This imports the css file called `App.css` and uses it for everything rendered in your App component. Lets add some styling to our form. Add the following code to `App.css`

```css
input[type=text] {
  padding: 12px 20px;
  margin: 8px 0;
}
```

This css selector applies the style to all input fields of type text. Padding changes how tightly the box fits around the text. There is 12px padding vertically and 20px padding horizontally. Margin affects how much room there is between the input box and the surrounding elements.

Next we will style the submit button with similar css attributes.

```css
input[type=button], input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 16px 32px;
  margin: 4px 2px;
}
```

Styling radio buttons is a bit more complicated. Copy and paste the following code into `App.css`

```css
input[type=radio]{
  -webkit-appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input:checked {
  border: 6px solid black;
}
```


Anyways, that's it for today's lesson. My suggestion is to read through everything we did today to make sure you understand JavaScript, HTML, CSS, and just the general ideas of React components and the structure of the React project because next class we will be making a project.



