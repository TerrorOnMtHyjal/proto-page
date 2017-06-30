import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Header extends Component {
  render() {

    const StyledHeader = styled.h1`
      font-family: ${this.props.headerFont}
    `;

    const headers = [
      `Pork ex adipisicing ut, picanha corned beef pig meatloaf shoulder shankle excepteur.`,

      `Laborum ullamco nisi, shank nulla meatloaf brisket t-bone shoulder boudin eu shankle sunt.`,

      `Bacon ipsum dolor amet swine sunt shank ball tip porchetta, et aliquip short ribs elit shoulder filet mignon 
      ribeye andouille velit spare ribs.`,

      `Capicola ea pastrami, sausage corned beef doner beef ribs short loin lorem kielbasa consectetur boudin 
      filet mignon anim aliquip.`
    ];

    return (
      <StyledHeader>
        {headers[Math.floor(Math.random()*headers.length)]}
      </StyledHeader>
    );
  }
}

const mapState = (state) => ({
  headerFont : state.activeFonts.header.family,
});

export default connect(mapState)(Header);