import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';

// Stylesheets
require('./assets/styles/main.css');

// Images and icons
require('./assets/images/react-favicon.ico');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);