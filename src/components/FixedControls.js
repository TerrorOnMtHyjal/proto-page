import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomizeFonts } from '../actions/actions';
import ModalControl from './ModalControl';
import styled from 'styled-components';

const ControlsWrapper = styled.div`
  position: fixed;
  padding-bottom: 50px;
  background-color: #36467c;
  bottom: 0px;
  width: 300px;
  display: flex;
  flex-flow: column;
  z-index: 100;

  &:before {
    content: '';
    position: absolute;
    top: -30px;
    height: 30px;
    width: 100%;
    background: linear-gradient(to top, rgba(54, 70, 124, 1), rgba(54, 70, 124, 0));;
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
`;

const RandomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 0;
  flex-grow: 2;

  & > i {
    margin-left: -7px;
    margin-top: 5px;
  }

  background-color: #4CAF50; 
  color: white;
  overflow: hidden;
  border: none;
  box-shadow: 0 3px #2f6a31;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
  &:active {
    background-color: #367c39;
    box-shadow: 0 2px #2f6a31;
    transform: translateY(2px);
  }
  &:focus {
    outline: 0;
  }
`;

class FixedControls extends Component {
  render() {
    return (
      <ControlsWrapper>
        <ButtonsWrapper>
          <ModalControl/>
          <RandomButton onClick={() => this.props.dispatch(randomizeFonts())}><i className="fa fa-random fa-3x" aria-hidden="true"></i></RandomButton>
        </ButtonsWrapper>
      </ControlsWrapper>
    );
  }
}

export default connect ()(FixedControls);