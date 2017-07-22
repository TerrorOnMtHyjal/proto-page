import React, { Component } from 'react';
import styled from 'styled-components';

import Text from '../components/blocks/Text';
import Button from '../components/blocks/Button';

const HeroWrapper = styled.div`
  width:                       100vw;
  position:                    relative;
  align-items:                 center;
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
  z-index:                    10;
  display:                    flex;
  flex-flow:                  column;
  margin:                     105px 2% 0 2%;

  & > h1 {
    font-size:                2.5em;
  }

  & > h3 {
    margin-top:               30px;
  }

  @media screen and (min-width: 480px){
    font-size:             20px;
  }
  @media screen and (min-width: 768px){
    font-size:             28px;
    margin:                105px 15% 0 15%;
    width:                 70%;
  }
  @media screen and (min-width: 1024px){
    font-size:             30px;
    margin:                150px 15% 0 15%;
    width:                 60%;
  }
  @media screen and (min-width: 1200px){
    width:                 50%;
  }
  @media screen and (min-width: 1650px){
    font-size:             32px;
    margin:                150px 15% 75px 15%;
    width:                 35%;
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