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

Events are actions that happen in the browser. The list of events include onchange, onclick, onmouseover, onmouseout, onkeydown, and onload.

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

Type the following command to install React, React DOM, and a sample React app.

```
npx create-react-app my-app
cd my-app
npm start
```

Open http://localhost:3000/ in your favorite browser to see your app.


