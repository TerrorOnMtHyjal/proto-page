import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomizeFonts, togglePopular } from '../actions/actions';
import ModalControl from './ModalControl';
import Toggle from 'react-toggle-button';
import styled from 'styled-components';

const ControlsWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  padding: 15px 20px 20px 20px;
  background-color: #36467c;
  bottom: 0px;
  width: 300px;
  z-index: 100;

  &:before {
    content: '';
    position: absolute;
    top: -30px;
    left: 0;
    height: 30px;
    width: 300px;
    background: linear-gradient(to top, rgba(54, 70, 124, 1), rgba(54, 70, 124, 0));;
  }
`;

const PopularWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  font-weight: bold;
  font-size: 16px;

  & > div {
    display: flex;
    align-items: center;

    & > p {
      margin-top: 2px;
      margin-left: 10px;
    }
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
`;

const ToolTip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 16px;
  color: gray;
  border-radius: 20px;
  background-color: #273259;

  & > span {
    margin-top: 2px;
  }
`;

const RandomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 0;
  flex-grow: 2;
  margin-left: 5px;
  border-radius: 3px;

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

const Icon = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

class FixedControls extends Component {
  render() {
    return (
      <ControlsWrapper>
        <PopularWrapper>
          <div>
            <Toggle
              activeLabel={<Icon><i className="fa fa-check" aria-hidden="true"></i></Icon>}
              inactiveLabel={<Icon><i className="fa fa-times" aria-hidden="true"></i></Icon>}
              value={this.props.popular} 
              onToggle={() => this.props.dispatch(togglePopular(!this.props.popular))} 
              colors={{active : {base: '#E91E63'}}}
            />
            <p>Popular Fonts</p>
          </div>
          <ToolTip><span>?</span></ToolTip>
        </PopularWrapper>
        <ButtonsWrapper>
          <ModalControl/>
          <RandomButton onClick={() => this.props.dispatch(randomizeFonts())}><i className="fa fa-random fa-2x" aria-hidden="true"></i></RandomButton>
        </ButtonsWrapper>
      </ControlsWrapper>
    );
  }
}

export default connect ()(FixedControls);