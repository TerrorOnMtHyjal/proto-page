import React, { Component } from 'react';
import styled from 'styled-components';

import Text from '../components/blocks/Text';

const CallWrapper = styled.div`
  position:                   relative;
  text-align:                 right;
  background:                 #fff;
  padding:                    50px 0;
  color:                      #1b1d1f;
  z-index:                    1;

  &:before {
    background:               inherit;
    top:                      0;
    content:                  '';
    display:                  block;
    height:                   75%;
    left:                     0;
    position:                 absolute;
    right:                    0;
    transform:                skewY(-4deg);
    transform-origin:         1%;
    z-index:                  -1;
  }
`;

const TextWrapper = styled.div`
  display:                flex;
  flex-flow:              column;
  width:                  90%;
  
  & > h1 {
    font-size:            1.5em;
    margin-bottom:        20px;
    text-transform:       uppercase;
  }

  & > h3 {
    font-size:            0.9em;
    margin-bottom:        35px;
  }

  @media screen and (min-width: 650px){
    font-size:             18px;
  }
  @media screen and (min-width: 768px){
    font-size:             20px;
    margin:                0 auto;
    width:                 70%;
  }
  @media screen and (min-width: 1024px){
    font-size:             22px;
  }
  @media screen and (min-width: 1650px){
    font-size:             24px;
  }
`;

class Call extends Component {
  render() {
    return (
      <CallWrapper>
        <TextWrapper>
          <Text type="header" string="1" tag="h1"/> 
          <Text type="subheader" string="1" tag="h3"/>
        </TextWrapper>
      </CallWrapper>
    );
  }
}

export default Call;