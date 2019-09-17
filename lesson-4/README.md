# Lesson #4: Tic Tac Toe React Project 
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

3. Add a file named `index.css` in the `src/` folder with this [CSS code](https://codepen.io/gaearon/pen/oWWQNa?editors=0100). You can do this by opening up the `tic-tac-toe` project in Atom or your IDE and creating a file through there.

4. Add a file named `index.js` in the `src/` folder with this [JS code](https://codepen.io/gaearon/pen/oWWQNa?editors=0010).

5. Add these three lines to the top of `index.js` in the `src/` folder:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```

Now if you run `npm start` in the project folder and open http://localhost:3000 in the browser, you should see an empty tic-tac-toe field.

## Inspecting Starter Code
Open `src/index.js`.

This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

By inspecting the code, you’ll notice that we have three React components: Square, Board, Game.

## Passing Data through props
To get our feet wet, let’s try passing some data from our Board component to our Square component.

In Board’s `renderSquare` method, change the code to pass a prop called value to the Square:

```js
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
```

Change Square’s `render` method to show that value by replacing `{/* TODO */}` with `{this.props.value}`:

```js
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```

After you should see a number in each square:

PICTURE HERE

Congratulations! You’ve just “passed a prop” from a parent Board component to a child Square component. Passing props is how information flows in React apps, from parents to children.

## Making an interactive component

Let’s fill the Square component with an “X” when we click it. First, change the button tag that is returned from the Square component’s render() function to this:

```js
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function() { alert('click'); }}>
        {this.props.value}
      </button>
    );
  }
}
```


Now we want the Square component to “remember” that it got clicked, and fill it with an “X” mark. We will do this by storing the current value of the Square in this.state, and change it when the Square is clicked. Add a constructor to the class to initialize the state:

```js
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
```

Now we’ll change the Square’s `render` method to display the current state’s value when clicked:

* Replace `this.props.value` with `this.state.value` inside the `<button>` tag.
* Replace the `onClick={...}` event handler with `onClick={() => this.setState({value: 'X'})}`.
* Put the `className` and `onClick` props on separate lines for better readability.

```js
render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
 ```
 
We now have the basic building blocks for our tic-tac-toe game. To have a complete game, we now need to alternate placing “X”s and “O”s on the board, and we need a way to determine a winner.

## Finishing up the game

The best approach is to store the game’s state in the parent Board component instead of in each Square. The Board component can tell each Square what to display by passing a prop, just like we did when we passed a number to each Square.

To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead.

Add a constructor to the Board and set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares:

```
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

```

We will modify the Board to instruct each individual Square about its current value ('X', 'O', or null). We have already defined the squares array in the Board’s constructor, and we will modify the Board’s renderSquare method to read from it:

```
renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
```

We need to create a way for the Square to update the Board’s state. Since state is considered to be private to a component that defines it, we cannot update the Board’s state directly from Square.

Instead, we’ll pass down a function from the Board to the Square, and we’ll have Square call that function when a square is clicked. We’ll change the `renderSquare` method in Board to:

```
renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
```

Now we’re passing down two props from Board to Square: `value` and `onClick`. The `onClick` prop is a function that Square can call when clicked. We’ll make the following changes to Square:

* Replace `this.state.value` with `this.props.value` in Square’s `render` method
* Replace `this.setState()` with `this.props.onClick()` in Square’s `render` method
* Delete the `constructor` from Square because Square no longer keeps track of the game’s state

After these changes, the Square component looks like this:

```
lass Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
```

When we try to click a Square, we should get an error because we haven’t defined `handleClick` yet. We’ll now add `handleClick` to the Board class (under the constructor):

```
handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }
```


 
 
