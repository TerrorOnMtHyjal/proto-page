import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Header extends Component {
  render() {

    const StyledHeader = styled.h1`
      font-family: ${this.props.headerFont};
      ${this.props.rules}
    `;

    const headers = [
      `PORK EX ADIPISICING UT, PICANHA CORNED BEEF PIG MEATLOAF SHOULDER SHANKLE EXCEPTEUR.`,

      `LABORUM ULLAMCO NISI, SHANK NULLA MEATLOAF BRISKET T-BONE SHOULDER BOUDIN EU SHANKLE SUNT.`,

      `BACON IPSUM DOLOR AMET SWINE SUNT SHANK BALL TIP PORCHETTA, ET ALIQUIP SHORT RIBS ELIT SHOULDER FILET MIGNON 
      RIBEYE ANDOUILLE VELIT SPARE RIBS.`,

      `CAPICOLA EA PASTRAMI, SAUSAGE CORNED BEEF DONER BEEF RIBS SHORT LOIN LOREM KIELBASA CONSECTETUR BOUDIN 
      FILET MIGNON ANIM ALIQUIP.`
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