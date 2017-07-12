import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomizeFonts } from '../actions/actions';
import styled from 'styled-components';
import ElementControls from './ElementControls';

const ControlsWrapper = styled.div`
  color: white;
`;

class Controls extends Component {

  generateControls(elements){
    const controls = [];

    for (let element in elements){
      controls.push(<ElementControls key={element} type={element} />)
    }  
    return controls;
  }

  render() {
    return (
      <ControlsWrapper className={this.props.className}>
        {this.generateControls(this.props.activeFonts)}
        <button onClick={() => this.props.dispatch(randomizeFonts())}>
          Randomize Fonts
        </button>
      </ControlsWrapper>
    );
  }
}

const mapState = (state) => ({
  activeFonts : state.appState.activeFonts
});

export default connect(mapState)(Controls);