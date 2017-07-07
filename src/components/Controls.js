import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomizeFonts, toggleLock } from '../actions/actions';
import styled from 'styled-components';

import ElementControls from './ElementControls';

class Controls extends Component {

  constructor(props){
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }

//move this into the ElementControls component
  onToggle(element){
    this.props.dispatch(toggleLock(element));
  }

  generateControls(elements){
    const controls = [];

    for (let element in elements){
      controls.push(
        <ElementControls
          key={element}
          type={element} 
        />
      )
    }
    return controls;
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.generateControls(this.props.activeFonts)}
        <button onClick={() => this.props.dispatch(randomizeFonts())}>
          Randomize Fonts
        </button>
      </div>
    );
  }
}

const mapState = (state) => ({
  controls : state.appState.controls,
  activeFonts : state.appState.activeFonts
});

export default connect(mapState)(Controls);