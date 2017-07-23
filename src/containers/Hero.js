import React, { Component } from 'react';
import styled from 'styled-components';

import Text from '../components/blocks/Text';
import Button from '../components/blocks/Button';

const HeroWrapper = styled.div`
  width:                       100vw;
  position:                    relative;
  background-image:            url(https://static.pexels.com/photos/186461/pexels-photo-186461.jpeg);
  background-attachment:       fixed;
  background-position:         100%;
  background-repeat:           no-repeat;
  background-size:             cover;

  &:before {
    content:                   '';
    position:                  absolute;
    top:                       0;
    right:                     0;
    bottom:                    0;
    left:                      0;
    background-image:          linear-gradient(to left, #00d2ff, #928dab);
    opacity:                   .4;
  }
`;

const TextWrapper = styled.div`
  display:                    flex;
  flex-flow:                  column;
  font-size: 22px;
  margin-left: 2%;
  padding-top: 75px;
  z-index: 10;
  width: 15em;

  & > h1, h3 {
    z-index: 1;
  }

  & > h1 {
    margin-bottom: 0.5em;
  }

  & > h3 {
    font-size: 0.9em;
  }

  @media screen and (min-width: 320px){
    margin-left: 5%;
  }

  @media screen and (min-width: 480px){
    font-size: 26px; 
  }

  @media screen and (min-width: 550px){

  }

  @media screen and (min-width: 768px){
    padding-top: 100px;
    font-size: 34px;

    & > h3 {
      font-size: 0.75em;
    }
  }
  @media screen and (min-width: 1150px){
    font-size: 42px;
  }
  @media screen and (min-width: 1400px){
    margin: 0 10%;
  }
`;

class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <TextWrapper>
          <Text type="header" tag="h1" string="0" />
          <Text type="subheader" tag="h3" string="0" />
          <Button />
        </TextWrapper>
      </HeroWrapper>
    );
  }
}

export default Hero;