# Lesson #1: Environment Setup, HTML & CSS
Welcome to Scope Fall 2019! This semester we'll be learning React, which is a JavaScript library for creating single page web applications. In this lesson we will dive into the React ecosystem, creating your first React application as well as learning about basic web development technologies, HTML and CSS.

## Setup

### Editor
For the lessons, you will need a text editor or an IDE and terminal (command line tool). We recommend using the open-source editor Atom, which can be downloaded [here](https://atom.io/).

### Node and NPM
Now you will need to install [node and npm (node package manager)](https://nodejs.org/en/). These will be used to manage libraries and packages. Install the package and follow the instructions that are prompted upon opening.

Verify both have been installed by running the following commands in your terminal.  If you don't get any output in the terminal, you need to install node and npm.

```
node --version
*v10.16.2
npm --version
*v6.9.0
```

### React
Now type the following command to install React, React DOM, and a sample React app.

```
npx create-react-app my-app
cd my-app
npm start
```

Open http://localhost:3000/ in your favorite browser to see your app.

## HTML & CSS

### What is HTML?
HTML is the standard markup language for creating websites. It provides the backbone and describes the structure of a webpage.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
	</head>
	<body>
		<h1>My First Heading</h1>
		<p>My first paragraph.</p>
	</body>
</html>
```

### Tags
Most tags have a start and end tag with the content in between. A few tags, like line break,  only require one tag ``<br />``.

``<h1>`` to ``<h6>`` -> different heading elements, where h1 is more important and h6 is least important

``<p>`` is for paragraphs. Put the content in between start and end paragraph tags. Note that new lines will be removed when rendered so you can use ``<br />`` to create line breaks.

``<!-- This is a comment -->``

### Attributes
Elements can have attributes which provide additional information about the element and are included in the start tag. They are written as key/value pairs.

```html
<a href="http://www.w3schools.com">This is a link</a>
```

 OR
 
 ```html
 <img src="w3schools.jpg" width="104" height="142" alt="Alternate Text!"> 
 ```
 
### What is CSS?
CSS (Cascading style sheets) allows you to provide the basic styling for HTML elements.


There are three ways to reference CSS:

1. Include a .css file by using a link tag in the head of your HTML file. <br/>
	
	
	HTML file:	
		
	```html
	<head>
		<link href="sample.css" />
	</head>
	<body>
		<p id="sampleText">This is sample text</p>
	</body>
	```
	
	sample.css:
	
	```css
	#sampleText{
		color: blue;
	}
	```


2. Include the CSS as an attribute.

	```html
	<p style="color: blue;">This is sample text</p>
	```
3. Include the CSS in a ``<style>`` tag.

	```html
	<head>
		<style>
			body {background-color: powderblue;}
			h1   {color: blue;}
			p    {color: red;}
		</style>
	</head>
	```

There are many different properties you can use to style your HTML. You can learn more [here](https://www.w3schools.com/cssref/).

