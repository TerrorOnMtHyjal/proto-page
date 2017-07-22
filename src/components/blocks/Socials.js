import React, { Component }         from 'react';
import styled                       from 'styled-components';

const StyledSocials = styled.img`
  width:                            15%;
  height:                           15%;
  margin-left:                      50px;
`;

class Socials extends Component {
  render() {
    return (
      <StyledSocials src="https://pandamoniumpink.files.wordpress.com/2015/10/buttons3.png" alt="Social Links Here"/>
    );
  }
}

export default Socials;