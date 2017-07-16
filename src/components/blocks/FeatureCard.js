import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Text from './Text';

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
      width: 33%;
      padding: 30px;
    `;

    const Icon = styled.i`
      font-size: 9em;
      color: #268dfc;
      margin-bottom: 30px;
    `;

    return (
      <Card>
        <Icon className={this.props.iconType}></Icon>
        <Text type="paragraph" tag="p"/>
      </Card>
    );
  }
}

const mapState = (state) => ({
  paragraphFont : state.appState.activeFonts.paragraph.family,
});

export default connect(mapState)(FeatureCard);