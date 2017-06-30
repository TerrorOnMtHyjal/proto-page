import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Subheader extends Component {
  render() {

    const StyledSubheader = styled.h3`
      font-family: ${this.props.subheaderFont}
    `;

    const subheaders = [
      `Pork ex adipisicing ut, picanha corned beef pig meatloaf shoulder shankle excepteur.`,

      `Laborum ullamco nisi, shank nulla meatloaf brisket t-bone shoulder boudin eu shankle sunt.`,

      `Bacon ipsum dolor amet swine sunt shank ball tip porchetta, et aliquip short ribs elit shoulder filet mignon 
      ribeye andouille velit spare ribs.`,

      `Capicola ea pastrami, sausage corned beef doner beef ribs short loin lorem kielbasa consectetur boudin 
      filet mignon anim aliquip.`
    ];

    return (
      <StyledSubheader>
        {subheaders[Math.floor(Math.random()*subheaders.length)]}
      </StyledSubheader>
    );
  }
}

const mapState = (state) => ({
  subheaderFont : state.activeFonts.subheader.family,
});

export default connect(mapState)(Subheader);