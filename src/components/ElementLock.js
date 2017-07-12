import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLock } from '../actions/actions';
import ToggleButton from 'react-toggle-button';
import styled from 'styled-components';

const ElementLockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 700;
`;

const LockControl = styled.div`
  display: flex;
  align-items: center;

  & > i {
    margin-right: 10px;
  }
`;

class ElementLock extends Component {
  render() {
    return (
      <ElementLockWrapper>

        <p>{this.props.type}</p>
        <LockControl>
          <i className="fa fa-lock"></i>
          <ToggleButton 
            value={this.props.locked} 
            onToggle={() => this.props.dispatch(toggleLock(this.props.type))} 
            colors={{active : {base: 'rgb(255,0,174)'}}}
          />
        </LockControl>

      </ElementLockWrapper>
    );
  }
}

export default connect()(ElementLock);