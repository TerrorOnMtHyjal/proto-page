import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FontControlBar from './FontControlBar';
import ElementLock from './ElementLock';

const ControlWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
  width: 100%;
`;

const ControlHeader = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 10px;

  & > p {
    font-style: italic;
  }
`;

class ElementControls extends Component {
  render() {
    return (
      <ControlWrapper>
        <ControlHeader>
          <ElementLock locked={this.props.locked} type={this.props.type}/>
          <p>{this.props.activeFonts[this.props.type].family}</p>
        </ControlHeader>
        <FontControlBar type={this.props.type}/>
      </ControlWrapper>
    );
  }
}

const mapState = (state, ownProps) => ({
  locked : state.appState.activeFonts[ownProps.type].locked,
  activeFonts : state.appState.activeFonts
});

export default connect(mapState)(ElementControls);