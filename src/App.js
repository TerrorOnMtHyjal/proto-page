import React, { Component } from 'react';
import { connect } from 'react-redux';
import { seedFonts } from './actions/actions';

import './App.css';


class App extends Component {
  componentWillMount(){
    this.props.dispatch(seedFonts());
  }

  render() {
    return (
      <div className="App">
        <h1>Oh hello</h1>
      </div>
    );
  }
}

export default connect()(App);
