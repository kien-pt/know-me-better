import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import data from './questions.json';

const App = () => {
  const [id, setId] = React.useState(Math.floor(Math.random() * data.questions.length));
  const interval = 0.01;
  
  const lotto = () => {
    var counter = 0;
    var timer = 0;

    const func = () => {
      counter++;
      timer += interval;
      setId(Math.floor(Math.random() * data.questions.length));
    }

    setInterval(() => {
      if (counter >= 100) {
        clearInterval(func);
      } else {
        func();
      }
    }, timer * timer * 1000);
  }

  return (
    <div id='container'>
      <div id='text'>{data.questions[id]}</div>
      <button id='button' onClick={lotto}>↻</button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

