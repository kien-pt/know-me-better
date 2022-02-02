import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import data from './questions.json';

const questions = [
  { type: 1, question: '' }
];

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
      if (counter >= 200) {
        clearInterval(func);
      } else {
        func();
      }
    }, timer * timer * 1000);
  }

  return (
    <div id='container'>
      <div id='text'>{data.questions[id]}</div>
      <button id='button' onClick={lotto}>
        <svg height="20px" version="1.1" viewBox="0 0 16 20" width="16px">
          <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
            <g fill="#2A0A5E" id="Icons-AV" transform="translate(-2.000000, -127.000000)">
              <g id="replay" transform="translate(2.000000, 127.000000)">
                <path d="M8,4 L8,0 L3,5 L8,10 L8,6 C11.3,6 14,8.7 14,12 C14,15.3 11.3,18 8,18 C4.7,18 2,15.3 2,12 L0,12 C0,16.4 3.6,20 8,20 C12.4,20 16,16.4 16,12 C16,7.6 12.4,4 8,4 L8,4 Z" id="Shape"/>
              </g>
            </g>
          </g>
        </svg>
      </button>
      <div id='version'>v0.2</div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

