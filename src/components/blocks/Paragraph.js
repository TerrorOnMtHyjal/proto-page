import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Paragraph extends Component {
  render() {

    const StyledParagraph = styled.p`
      font-family: ${this.props.paragraphFont};
      ${this.props.rules}
    `;

    const paragraphs = [
      `Spicy jalapeno bacon ipsum dolor amet corned beef meatball ullamco hamburger laborum ipsum et 
      pork belly culpa exercitation. Do voluptate pork belly nisi meatball lorem short loin hamburger 
      aliqua short ribs. Pork ex adipisicing ut, picanha corned beef pig meatloaf shoulder shankle excepteur.`,

      `Fatback hamburger brisket, occaecat minim leberkas corned beef ut velit shoulder ham hock tempor bacon. 
      Beef venison fatback quis sint tri-tip est nisi. Ad anim kielbasa, sausage aliquip shoulder dolore aliqua 
      magna sunt nisi ipsum. Laborum ullamco nisi, shank nulla meatloaf brisket t-bone shoulder boudin eu shankle 
      sunt. Sunt in fugiat, beef ribs nisi porchetta prosciutto et tempor cow quis leberkas ground round biltong 
      enim.`,

      `Bacon ipsum dolor amet swine sunt shank ball tip porchetta, et aliquip short ribs elit shoulder filet mignon 
      ribeye andouille velit spare ribs. Deserunt t-bone biltong ullamco tail eiusmod. Boudin ut landjaeger ex, 
      tongue nulla ham hock pork belly drumstick picanha consequat fatback hamburger sirloin bacon. Pariatur 
      leberkas salami doner. Hamburger deserunt ribeye ullamco beef ribs boudin in enim fugiat. Sirloin shoulder 
      pork chop spare ribs exercitation. Ham hock hamburger cow ea tempor ut ham, tenderloin andouille filet mignon 
      picanha chicken veniam.`,

      `Capicola ea pastrami, sausage corned beef doner beef ribs short loin lorem kielbasa consectetur boudin 
      filet mignon anim aliquip. Velit biltong capicola, turducken andouille ribeye sint tenderloin venison short 
      loin et laboris. Kielbasa beef ribs cow tail qui turkey consectetur enim voluptate filet mignon. Andouille 
      kevin chicken ground round kielbasa. Quis doner sirloin laborum.`
    ];

    return (
      <StyledParagraph>
        {paragraphs[Math.floor(Math.random()*paragraphs.length)]}
      </StyledParagraph>
    );
  }
}

const mapState = (state) => ({
  paragraphFont : state.activeFonts.paragraph.family,
});

export default connect(mapState)(Paragraph);