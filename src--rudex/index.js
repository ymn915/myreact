import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $axios from './http'
Component.prototype.$axios=$axios
ReactDOM.render(
    <App />,
  document.getElementById('root')
);


