import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bus from './components/Bus';
Component.prototype.$bus = bus;
ReactDOM.render(
    <App />,
  document.getElementById('root')
);