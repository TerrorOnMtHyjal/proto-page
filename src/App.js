import React, { Component } from 'react';
import { connect } from 'react-redux';
import { seedFonts, applyFonts } from './actions/actions';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import Controls from './components/Controls';


class App extends Component {
  componentWillMount(){
    this.props.dispatch(seedFonts());
    this.props.dispatch(applyFonts());
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

    if(this.props.isFetchingSeed || this.props.isFetchingFonts){
      return (
        <ReactLoading type={"bars"} color={"#ff00ae"} height={100} width={100} delay={100}/>
      )
    } else {
      return (
        <div className="App">
          <StyledHeader>Oh hello</StyledHeader>
          <StyledSubheader>Subheader, yo.</StyledSubheader>
          <StyledPara>This is my test paragraph, is this working yo?</StyledPara>
          <Controls/>
        </div>
      );
    }
  }
}

const mapState = (state) => ({
  activeFonts : state.activeFonts,
  isFetchingFonts : state.isFetchingFonts,
  isFetchingSeed : state.isFetchingSeed
});

export default connect(mapState)(App);
