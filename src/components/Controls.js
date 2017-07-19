import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomizeFonts } from '../actions/actions';
import styled from 'styled-components';
import ElementControls from './ElementControls';

const ControlsWrapper = styled.div`
  color: white;
`;

const RandomButton = styled.button`
  position: fixed;
  bottom: 48px;
  left: 20px;
  height: 40px;
  width: 260px;
`;

class Controls extends Component {

  generateControls(elements){
    const controls = [];

    for (let element in elements){
      controls.push(<ElementControls key={`${element}Controls`} type={element} />)
    }  
    return controls;
  }

  render() {
    return (
      <ControlsWrapper className={this.props.className}>
        {this.generateControls(this.props.activeFonts)}
        <RandomButton onClick={() => this.props.dispatch(randomizeFonts())}><i className="fa fa-random" aria-hidden="true"></i>Randomize Fonts</RandomButton>
      </ControlsWrapper>
    );
  }
}

const mapState = (state) => ({
  activeFonts : state.appState.activeFonts
});

export default connect(mapState)(Controls);