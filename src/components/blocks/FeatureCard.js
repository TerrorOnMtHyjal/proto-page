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

    const TextWrapper = styled.div`
      display: flex;
      justify-content: space-between;

      @media only screen and (min-width: 550px){
        width: 70%;
      }

      @media only screen and (min-width: 768px){
        width: 65%;
      }

      @media only screen and (min-width: 970px){
        width: 70%;
      }
    `;
     
    const Card = styled.div`
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-top: 70px;
      
      @media only screen and (min-width: 650px){
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      @media only screen and (min-width: 768px){
        width: 70%;
      }

      @media only screen and (min-width: 1400px){
        flex-flow: column;
        width: 33%;
      }
    `;


    const Icon = styled.i`
      font-size: 9em;
      color: #268dfc;
      margin-bottom: 20px;
    `;

    return (
      <Card>
        <Icon className={this.props.iconType}></Icon>
        <TextWrapper><Text type="paragraph" tag="p"/></TextWrapper>
      </Card>
    );
  }
}

const mapState = (state) => ({
  paragraphFont : state.appState.activeFonts.paragraph.family,
});

export default connect(mapState)(FeatureCard);