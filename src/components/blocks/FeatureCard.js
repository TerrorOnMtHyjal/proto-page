import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const features = [
  "TONGUE NULLA HAM",
  "DESERUNT T-BONE",
  "EA TURKEY BOUDIN ULLAMCO",
  "NON GROUND ROUND",
  "FRANKFURTER FLANK DONER",
  "SAUSAGE QUIS ENIM",
  "MCGRIDDLE VON ELUM",
  "BACON SAUSAGE MASKS",
  "HAM APPOINTED LAWYER",
  "TURKEY-BASED DESK JOB"
];

class FeatureCard extends Component {
  render() {

    const StyledParagraph = styled.p`
      margin-top: 15px;
      font-family: ${this.props.paragraphFont};
    `;
     
    const Card = styled.div`
      display: flex;
      flex-flow: column;
      align-items: center;
      text-align: center;
    `;

    const Icon = styled.i`
      font-size: 9em;
      color: #008fb3;
    `;

    return (
      <Card>
        <Icon className={this.props.iconType}></Icon>
        <StyledParagraph>{features[Math.floor(Math.random()*features.length)]}</StyledParagraph>
      </Card>
    );
  }
}

const mapState = (state) => ({
  paragraphFont : state.appState.activeFonts.paragraph.family,
});

export default connect(mapState)(FeatureCard);