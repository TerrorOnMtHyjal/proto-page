import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FontControlBar from './FontControlBar';
import ElementLock from './ElementLock';
import ControlHeader from './ControlHeader';

const ControlWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  padding: 30px 0 15px 0;
  width: 100%;
  z-index: 1;

  ${props => {
    switch(props.type){
      case "header":
        return `background-color: #273259;`
      case "subheader":
        return `background-color: #2f3c6a;`
      case "paragraph":
        return `background-color: #36467c;`
      default:
        return ""
    }
  }};
`;

class ElementControls extends Component {
  render() {
    return (
      <ControlWrapper type={this.props.type}>
        <ControlHeader type={this.props.type} locked={this.props.locked} family={this.props.activeFonts[this.props.type].family} />
        <FontControlBar type={this.props.type} />
      </ControlWrapper>
    );
  }
}

const mapState = (state, ownProps) => ({
  locked : state.appState.activeFonts[ownProps.type].locked,
  activeFonts : state.appState.activeFonts
});

export default connect(mapState)(ElementControls);