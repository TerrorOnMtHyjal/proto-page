import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FontControlBar from './FontControlBar';
import ElementLock from './ElementLock';
import ControlHeader from './ControlHeader';

const ControlWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
  width: 100%;
`;

class ElementControls extends Component {
  render() {
    return (
      <ControlWrapper>
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