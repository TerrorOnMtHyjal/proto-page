import React, { Component }             from 'react';
import { connect }                      from 'react-redux';
import styled                           from 'styled-components';

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
    <span>Startup bacon ipsum <Highlight>solutions</Highlight> and <Highlight>deliverable</Highlight> ham technologies</span>,
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

  componentWillUnmount(){
    console.log("see ya")
  }
  
  render(){ 
    const Tag = this.props.tag;
    const content = strings[this.props.type][this.props.string];

    const StyledTag = styled(Tag)`
      ${this.props.rules};
    `;

    const Scaler = styled.span`
      font-family: ${props => props.theme[this.props.type].family};
      font-weight: ${props => props.theme[this.props.type].weight};
      font-style: ${props => props.theme[this.props.type].style};
      font-size: ${props => props.theme[this.props.type].size}%;
      line-height: 1em;
      opacity: ${props => props.loading ? '0' : '1'};
      transition: all 0.25 ease-in;
    `;

    return (
      <StyledTag><Scaler>{content}</Scaler></StyledTag>
    )
  }
}

export default Text;