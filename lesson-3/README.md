# Lesson #3: Tic Tac Toe React Project 
In this lesson we will continue learning more about React through an interactive tic-tac-toe game.

## Setup

1. Install another version of `create-react-app` by typing the following command

```
npx create-react-app tic-tac-toe
```
2. Delete all files in the src/ folder of the new project, but keep the src/ folder

```
cd tic-tac-toe
cd src

#if you're using Mac or Linux
rm -f *

#if you're using Windows
del *

#switch back to project folder
cd..
```

3. Add a file named `index.css` in the `src/` folder with this [CSS code](https://codepen.io/gaearon/pen/oWWQNa?editors=0100).

4. Add a file named `index.js` in the `src/` folder with this [JS code](https://codepen.io/gaearon/pen/oWWQNa?editors=0010).

5. Add these three lines to the top of `index.js` in the `src/` folder:

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```

Now if you run `npm start` in the project folder and open http://localhost:3000 in the browser, you should see an empty tic-tac-toe field.