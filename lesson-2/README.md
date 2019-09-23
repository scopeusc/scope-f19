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

Now lets work with multiple components. Create a file in the `src/` directory of your project called `Title.js`. Insert the following into the file:

```js
import React from 'react';

function Title() {
  return (
    <div className="Title">
      <h1> Title component </h1>
    </div>
  );
}

export default Title;
```

In `App.js`, add the following line at the top of the file:

```js
import Title from './Title.js';
```

Then in the body of `App.js`, add the following line somewhere in your div tag:

```js
<Title />
```

You should see the words "Title component" on your web page when you navigate back to localhost. You have successfully added an additional component to your web page. 



