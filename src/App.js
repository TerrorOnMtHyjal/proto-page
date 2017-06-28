import React, { Component } from 'react';
import { connect } from 'react-redux';
import { seedFonts, applyFonts } from './actions/actions';
import styled from 'styled-components';

import Controls from './components/Controls';
import './App.css';


class App extends Component {
  componentWillMount(){
    this.props.dispatch(seedFonts());
    this.props.dispatch(applyFonts(this.props.activeFonts.header, this.props.activeFonts.subheader, this.props.activeFonts.paragraph));
  }

  render() {
    const StyledPara = styled.p`
      font-family: ${this.props.activeFonts.paragraph.family};
    `;

    const StyledHeader = styled.h1`
      font-family: ${this.props.activeFonts.header.family};
    `;

    const StyledSubheader = styled.h3`
      font-family: ${this.props.activeFonts.subheader.family};
    `;

    return (
      <div className="App">
        <StyledHeader>Oh hello</StyledHeader>
        <StyledPara>This is my test paragraph, is this working yo?</StyledPara>
        <Controls/>
      </div>
    );
  }
}

const mapState = (state) => ({
  activeFonts : state.activeFonts
});

export default connect(mapState)(App);
