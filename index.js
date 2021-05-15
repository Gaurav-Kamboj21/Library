import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
let hours = 6;
let greeting = hours <= 6 ? "Good Morning" : "Goot Night";
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
