import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomizeFonts, toggleLock } from '../actions/actions';
import styled from 'styled-components';

import ElementLock from './ElementLock';

class Controls extends Component {

  constructor(props){
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }

//move this into the elementlock component
  onToggle(element){
    this.props.dispatch(toggleLock(element));
  }

  generateControls(elements){
    const controls = [];

    for (let element in elements){
      controls.push(
        <ElementLock
          key={element}
          type={element} 
          isLocked={this.props.controls.isLocked[element]} 
          activeFont={this.props.activeFonts[element]}
          onToggle={this.onToggle}
        />
      )
    }
    return controls;
  }

  render() {
    return (
      <div className={this.props.className}>
        <button onClick={() => this.props.dispatch(randomizeFonts())}>
          Randomize Fonts
        </button>
        {this.generateControls(this.props.activeFonts)}
      </div>
    );
  }
}

const mapState = (state) => ({
  controls : state.controls,
  activeFonts : state.activeFonts
});

export default connect(mapState)(Controls);