# Lesson #4: To Do App Project
In this lesson you will build a simple to do app.

## Setup
Run the following code the create a barebones react app.

```
create-react-app react-metronome
```

After it finishes installing, cd into the folder and start your app.

```
cd react-metronome
npm start   # or yarn start
```
The first thing we’ll do is replace the `App` component with our `Metronome` one. In `index.js`, just replace every occurrence of “App” with “Metronome”.

```
import React from 'react';
import ReactDOM from 'react-dom';
import Metronome from './Metronome';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Metronome />, document.getElementById('root'));
registerServiceWorker();
```

And then create two new files: `src/Metronome.css`, and `src/Metronome.js`.

Start off Metronome.js with a barebones component to verify everything is working:

```
import React, { Component } from 'react';
import './Metronome.css';

class Metronome extends Component {
  render() {
    return <div className="metronome">hi</div>;
  }
}

export default Metronome;
```
Your app should refresh in your browser (localhost:3000) and you should see hi.

Now lets create the UI. This code should create a static button and slider.

```
import React, { Component } from 'react';
import './Metronome.css';

class Metronome extends Component {
  render() {
    let bpm = 100;
    let playing = false;

    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input type="range" min="60" max="240" value={bpm} />
        </div>
        <button>{playing ? 'Stop' : 'Start'}</button>
      </div>
    );
  }
}

export default Metronome;
```

Now add the following to `Metronome.css`

```
.metronome {
  text-align: center;
  max-width: 375px;
  margin: 0 auto;
  padding: 30px;
}

.bpm-slider input {
  width: 100%;
  margin: 10px;
}

.metronome button {
  background: #c94d46;
  padding: 10px;
  border: 1px solid #832420;
  border-radius: 2px;
  width: 100px;
  color: #fff;
  font-size: 18px;
}
```
It should look like this:

[INSERT PICTURE]

You won’t be able to change anything yet, because we didn’t implement the onChange handler for the input control. It’s stuck at 100 (the value={bpm}).

