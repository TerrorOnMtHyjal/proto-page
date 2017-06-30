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

    const StyledImage = styled.img`
      border-radius : 50px;
      width: 100px;
      height: 100px;
    `;
    const StyledParagraph = styled.p`
      font-family: ${this.props.paragraphFont};
    `;
    const Card = styled.div`
      display: flex;
      flex-flow: column;
      align-items: center;
      text-align: center;
    `;

    return (
      <Card>
        <StyledImage src={`http://lorempixel.com/100/100/technics/${Math.floor(Math.random() * 10) + 1}`} />
        <StyledParagraph>{features[Math.floor(Math.random()*features.length)]}</StyledParagraph>
      </Card>
    );
  }
}

const mapState = (state) => ({
  paragraphFont : state.activeFonts.paragraph.family,
});

export default connect(mapState)(FeatureCard);