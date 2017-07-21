import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomizeFonts } from '../actions/actions';
import ModalControl from './ModalControl';
import styled from 'styled-components';

const ControlsWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
`;

const RandomButton = styled.button`
  flex-basis: 0;
  flex-grow: 2;
`;

class FixedControls extends Component {
  render() {
    return (
      <ControlsWrapper>
        <p>Popular Fonts (?)</p>
        <ButtonsWrapper>
          <ModalControl/>
          <RandomButton onClick={() => this.props.dispatch(randomizeFonts())}><i className="fa fa-random" aria-hidden="true"></i>Randomize Fonts</RandomButton>
        </ButtonsWrapper>
      </ControlsWrapper>
    );
  }
}

export default connect ()(FixedControls);