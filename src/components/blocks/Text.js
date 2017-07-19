import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const strings = {
  header : [
    `Eat meat over the cloud`,
    `Digital protein at the speed of internet`,
    `Bacon ipsum dolor amet swine sunt shank ball tip porchetta`,
    `Capicola ea pastrami, sausage corned beef`,
    "Tongue Nulla Ham",
    "Deserunt T-Bone",
    "Ground Round",
  ],
  subheader : [
    <span>Startup bacon ipsum <span>solutions</span> and <span>deliverable</span> ham technologies</span>,
    `Deus ex pork. Instant delivery. All we need is your mouth.`
    // `Laborum ullamco nisi, shank nulla meatloaf brisket t-bone shoulder boudin eu shankle sunt.`,
     //`Startup bacon ipsum solutions and deliverable ham technologies.`,
    // `Capicola ea pastrami, sausage corned beef doner beef ribs short loin lorem kielbasa consectetur boudin.`
  ],
  paragraph : [
    `Spicy jalapeno bacon ipsum dolor amet corned beef meatball ullamco hamburger laborum ipsum et 
    pork belly culpa exercitation. Do voluptate pork belly nisi meatball lorem short loin hamburger 
    aliqua short ribs.`,
    `Fatback hamburger brisket, occaecat minim leberkas corned beef ut velit shoulder ham hock tempor bacon. 
    Beef venison fatback quis sint tri-tip est nisi.`,
    `Bacon ipsum dolor amet swine sunt shank ball tip porchetta, et aliquip short ribs elit shoulder filet mignon 
    ribeye andouille velit spare ribs. Deserunt t-bone biltong ullamco tail eiusmod.`,
    `Uploading pastrami, sausage, corned beef and short ribs since 1857. Loin lorem kielbasa consectetur. Velit biltong capicola, turducken andouille 
    ribeye.`
  ]
}

class Text extends Component {
  
  render(){
    const {family, variant, size} = this.props[this.props.type];  
    const Tag = this.props.tag;
    const content = strings[this.props.type][this.props.string];
    let weight = variant.replace(/\D/g,'');
    let style = variant.replace(/[0-9]/g, '');    

    if(variant === "regular"){
      weight = "normal";
      style = "normal";
    } else if(variant === "italic"){
      weight = "normal";
      style = "italic";
    }

    const StyledTag = styled(Tag)`
      ${this.props.rules};
    `;

    const Scaler = styled.span`
      font-family: ${family};
      font-weight: ${weight};
      font-style: ${style};
      font-size: ${this.props.scale ? size * this.props.scale : size}%;
      // line-height: ${(this.props.scale ? 16 * this.props.scale : 16) * 2}px;
      margin: 0;
      padding: 0;

      & > span {
        font-family: inherit;
        font-weight: inherit;
        font-style: inherit;
      }

      & > span > span {
        font-family: inherit;
        font-weight: inherit;
        font-style: inherit;
        color: #fce326;
      }
    `;

    return (
      <StyledTag><Scaler className="text">{content}</Scaler></StyledTag>
    )
  }
}

const mapState = (state) => ({
  header : state.appState.activeFonts.header,
  subheader : state.appState.activeFonts.subheader,
  paragraph : state.appState.activeFonts.paragraph
});

export default connect(mapState)(Text);