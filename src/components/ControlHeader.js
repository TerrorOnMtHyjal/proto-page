import React, { Component } from 'react';
import ElementLock from './ElementLock';
import styled from 'styled-components';

const ControlWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
`;

const CategoryButton = styled.button`
  margin-right: 10px;
  min-width: 50px;
`;

const FontControls = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  text-overflow: ellipsis;
`;

const CurrentFont = styled.p`
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: italic;
  opacity: 0.7;
`;

class ControlHeader extends Component {
  render() {
    return (
      <ControlWrapper>


        <CategoryButton>
         <p>E</p> 
        </CategoryButton>


        <FontControls>
          <ElementLock locked={this.props.locked} type={this.props.type}/>
          <CurrentFont> { this.props.family } </CurrentFont>
        </FontControls>



      </ControlWrapper>
    );
  }
}

export default ControlHeader;