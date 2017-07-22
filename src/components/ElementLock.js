import React, { Component }                 from 'react';
import { connect }                          from 'react-redux';
import Toggle                               from 'react-toggle-button';
import styled                               from 'styled-components';

import { toggleLock, updateActiveFont }     from '../actions/actions';

const ElementLockWrapper = styled.div`
  display:                                  flex;
  justify-content:                          space-between;
  text-transform:                           uppercase;
  font-weight:                              700;
`;

const Icon = styled.span`
  display:                                  flex;
  align-items:                              center;
  font-size:                                18px;
`;

class ElementLock extends Component {
  render() {
    return (
      <ElementLockWrapper>

        <p>{this.props.type}</p>
        <Toggle
          activeLabel={<Icon><i className="fa fa-lock" aria-hidden="true"></i></Icon>}
          inactiveLabel={<Icon><i className="fa fa-unlock" aria-hidden="true"></i></Icon>}
          value={this.props.locked} 
          onToggle={() => this.props.dispatch(updateActiveFont(!this.props.locked, this.props.type, "locked"))} 
          colors={{active : {base: '#E91E63'}}}
        />

      </ElementLockWrapper>
    );
  }
}

export default connect()(ElementLock);