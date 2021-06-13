import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Potato from './Potato';
import Food from './Food';

ReactDOM.render(
  <React.StrictMode>
    <App /><Potato />
    <Food fav="kimchi"/>
    <Food fav="pizza"/>
  </React.StrictMode>,
  document.getElementById('root')
);