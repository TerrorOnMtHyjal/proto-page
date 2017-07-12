import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const strings = {
  header : [
    `PORK EX ADIPISICING UT, PICANHA CORNED BEEF PIG MEATLOAF SHOULDER SHANKLE EXCEPTEUR.`,
    `LABORUM ULLAMCO NISI, SHANK NULLA MEATLOAF BRISKET T-BONE SHOULDER BOUDIN EU SHANKLE SUNT.`,
    `BACON IPSUM DOLOR AMET SWINE SUNT SHANK BALL TIP PORCHETTA, ET ALIQUIP SHORT RIBS ELIT SHOULDER FILET MIGNON 
    RIBEYE ANDOUILLE VELIT SPARE RIBS.`,
    `CAPICOLA EA PASTRAMI, SAUSAGE CORNED BEEF DONER BEEF RIBS SHORT LOIN LOREM KIELBASA CONSECTETUR BOUDIN 
    FILET MIGNON ANIM ALIQUIP.`
  ],
  subheader : [
    `Pork ex adipisicing ut, picanha corned beef pig meatloaf shoulder shankle excepteur.`,
    `Laborum ullamco nisi, shank nulla meatloaf brisket t-bone shoulder boudin eu shankle sunt.`,
    `Bacon ipsum dolor amet swine sunt shank ball tip porchetta, et aliquip short ribs elit shoulder filet mignon.`,
    `Capicola ea pastrami, sausage corned beef doner beef ribs short loin lorem kielbasa consectetur boudin.`
  ],
  paragraph : [
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
  ]
}

class Text extends Component {
  
  render(){
    const {family, variant} = this.props[this.props.type];  
    const Tag = this.props.size;
    const content = strings[this.props.type][Math.floor(Math.random()*[this.props.type].length)];
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
      font-family: ${family};
      font-weight: ${weight};
      font-style: ${style};
      ${this.props.rules};
    `;

    return (
      <StyledTag>{content}</StyledTag>
    )
  }
}

const mapState = (state) => ({
  header : state.appState.activeFonts.header,
  subheader : state.appState.activeFonts.subheader,
  paragraph : state.appState.activeFonts.paragraph
});

export default connect(mapState)(Text);