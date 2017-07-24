import React, { Component }             from 'react';
import { connect }                      from 'react-redux';
import styled, { withTheme }            from 'styled-components';

const Highlight = styled.span`
  color: #fcad26;
`;

const strings = {
  header : [
    `Eat meat over the cloud`,
    `Digital protein at the speed of internet`,
    `Bacon ipsum dolor amet swine sunt shank ball tip porchetta`,
    `Capicola ea pastrami, sausage corned beef`,
    'Tongue Nulla Ham',
    'Deserunt T-Bone',
    'Ground Round',
  ],
  subheader : [
    <span>Startup bacon adhoc <Highlight>solutions</Highlight> and <Highlight>deliverable</Highlight> ham technologies</span>,
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


const Scaler = styled.span`

`;

class Text extends Component { 
  render(){
    const {family, style, weight, size} = this.props.theme[this.props.type];
    const styles = {
      fontFamily: family,
      fontWeight: weight,
      fontStyle: style,
      fontSize: size + "%",
      lineHeight: "1em"
    };

    const Tag = `${this.props.tag}`;
    const content = strings[this.props.type][this.props.string];

    return (
      <Tag><Scaler style={styles} type={this.props.type}>{content}</Scaler></Tag>
    )
  }
}

export default withTheme(Text);