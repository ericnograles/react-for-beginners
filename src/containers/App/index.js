import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';


import Home from '../Home';
import Sample from '../Sample';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/sample" component={Sample}></Route>
        <Route path="*" component={Home}></Route>
      </Router>
    );
  }
}