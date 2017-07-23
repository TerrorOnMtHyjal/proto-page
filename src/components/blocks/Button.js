import React, { Component }         from 'react';
import styled                       from 'styled-components';



const StyledButton = styled.a`
  font-family: "Roboto", serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fcad26;
	background:                       none;
	cursor:                           pointer;
	padding:                          1em;
	overflow:                         hidden;
	margin:                           50px 0 75px 0;
	text-transform:                   uppercase;
	letter-spacing:                   1px;
	font-weight:                      700;
	outline:                          none;
  background:                       transparent;
	color:                            #fff;
  width:                            30%;
  min-width: 150px;
  font-size:                        1.1rem;
  transition: border 0.35s ease;

  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    transition: all 0.35s ease;
    background-color: #fcad26;
  }

  &:hover {
    border: 1px solid transparent;
  }

  &:hover::after {
    width: 100%;
  }

  &:active {
    background:                     #f88500;
  }

`;

class Button extends Component {
  render() {
    return (
      <StyledButton>
        <span>WE HAVE IT</span> 
      </StyledButton>
    );
  }
}

export default Button;