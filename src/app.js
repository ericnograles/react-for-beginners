import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';

// MDL
require('material-design-lite');
require('../node_modules/material-design-lite/material.min.css');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);