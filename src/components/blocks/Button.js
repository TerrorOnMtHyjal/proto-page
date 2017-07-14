import React, { Component } from 'react';
import styled from 'styled-components';



const StyledButton = styled.a`
	background: none;
	cursor: pointer;
	padding: 25px 120px 25px 60px;
	overflow: hidden;
	display: inline-block;
	margin: 50px 0;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
	position: relative;
	transition: all 0.3s;
  background: #fcad26;
	color: #fff;
  width: 100px;

  &:hover {
	  background: #f29e0d;
  }

  &:active {
    background: #f58500;
    top: 2px;
}

  &:before{
    position: absolute;
	  height: 100%;
	  left: auto;
    right: -5px;
	  top: 0;
	  line-height: 2.2;
	  font-size: 200%;
	  width: 60px;
	  z-index: 2;
    content: "\f178";
    font-family: "FontAwesome"
  }

  &:after{
    width: 35%;
    height: 200%;
    background: rgba(255,255,255,0.1);
    z-index: 1;
    right: 0;
    top: 0;
    margin: -5px 0 0 -5px;
    transform-origin: 0 0;
	  transform: rotate(-20deg);
    content: '';
	  position: absolute;
    transition: all 0.3s;
  }

  &:hover:after{
    width: 42%;
  }
`;

class Button extends Component {
  render() {
    return (
      <StyledButton>
        <span>PRIME RIB</span> 
      </StyledButton>
    );
  }
}

export default Button;