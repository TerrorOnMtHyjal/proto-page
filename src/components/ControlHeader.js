import React, { Component } from 'react';
import ElementLock from './ElementLock';
import styled from 'styled-components';
import { connect } from 'react-redux';
import OptionsSlider from './OptionsSlider';

const ControlWrapper = styled.div`
  display: flex;
  padding: 0 20px 10px 20px;
`;

const CategoryButton = styled.button`
  margin-right: 15px;
  min-width: 40px;
  min-height: 40px;
  background-color: #4CAF50; 
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  border: none;
  border-radius: 5px;
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

const FontControls = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-overflow: ellipsis;
`;

const CurrentFont = styled.p`
  width: 200px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: italic;
  opacity: 0.8;
`;

class ControlHeader extends Component {
  render() {
    return (
      <ControlWrapper>


        <CategoryButton>
         <p>E</p> 
        </CategoryButton>


        <FontControls>
          <ElementLock locked={ this.props.locked } type={ this.props.type }/>
          <CurrentFont> { this.props.family } </CurrentFont>
        </FontControls>



      </ControlWrapper>
    );
  }
}

export default connect()(ControlHeader);