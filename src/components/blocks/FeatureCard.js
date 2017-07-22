import React, { Component }               from 'react';
import styled                             from 'styled-components';
import { connect }                        from 'react-redux';

import Text                               from './Text';

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

    const Card = styled.div`
      display:                          flex;
      flex-flow:                        column;
      align-items:                      center;
      justify-content:                  center;
      margin-top:                       40px;
      font-size:                        14px;
      
      @media only screen and (min-width: 650px){
        flex-flow:                      row;
        justify-content:                space-between;
        font-size:                      15px;
      }

      @media only screen and (min-width: 768px){
        width:                          70%;
        margin:                         40px auto 0 auto;
      }

      @media only screen and (min-width: 1400px){
        flex-flow:                      column;
        justify-content:                flex-start;
        width:                          33%;
        font-size:                      16px;
      }
    `;

    const TextWrapper = styled.div`
      display:                          flex;
      flex-flow:                        column;
      justify-content:                  space-between;
      align-items:                      center;
      margin-top:                       0.8em;

      & > h1 {
        font-size:                      1.5em;
        padding-bottom:                 0.8em;
      }

      @media only screen and (min-width: 650px){
        align-items:                    flex-start;
        margin-top:                     0;
        width:                          70%;

        & > h1 {
          padding-bottom:               0.2em;
        }
      }

      @media only screen and (min-width: 768px){
        width:                          65%;
      }

      @media only screen and (min-width: 970px){
        width:                          70%;
      }

      @media only screen and (min-width: 1400px){
        align-items:                    center;
        margin-top:                     20px;
        width:                          70%;

        & > h1 {
          padding-bottom:               0.8em;
        }
      }
    `;
     
    const Icon = styled.i`
      font-size:                        9em;
      color:                            #268dfc;
    `;

    return (
      <Card>
        <Icon className={ this.props.iconType }></Icon>
        <TextWrapper>
          <Text type="header" tag="h1" string={ this.props.head }></Text>
          <Text type="paragraph" tag="p" string={ this.props.para }/>
        </TextWrapper>
      </Card>
    );
  }
}

const mapState = (state) => ({
  paragraphFont : state.appState.activeFonts.paragraph.family,
});

export default connect(mapState)(FeatureCard);