import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomizeFonts } from '../actions/actions';

class Controls extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch(randomizeFonts())}>
          Randomize Fonts
        </button>
      </div>
    );
  }
}

export default connect()(Controls);