import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ElementControls from './ElementControls';
import FixedControls from './FixedControls';

const ControlsWrapper = styled.div`
  color: white;
  font-family: 'Roboto', sans-serif;
  padding-bottom: 120px;
`;

class Controls extends Component {

  generateControls(elements){
    const controls = [];

    for (let element in elements){
      controls.push(<ElementControls key={`${element}Controls`} type={element} />)
    }  
    return controls;
  }

  render() {
    return (
      <ControlsWrapper className={ this.props.className }>
        {this.generateControls(this.props.activeFonts)}
        <FixedControls popular={ this.props.popular }/>
      </ControlsWrapper>
    );
  }
}

const mapState = ({ appState }) => ({
  activeFonts : appState.activeFonts,
  popular : appState.popular
});

export default connect(mapState)(Controls);