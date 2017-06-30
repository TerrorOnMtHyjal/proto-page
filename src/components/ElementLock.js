import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button';

class ElementLock extends Component {
  render() {
    return (
      <div>
          <p>Lock {this.props.type}</p>
          <p>Current Font : {this.props.activeFont.family}</p>
          <ToggleButton
            value={this.props.isLocked} 
            onToggle={() => this.props.onToggle(this.props.type)} 
            colors={{
              active : {
                base: 'rgb(255,0,174)'
              }
            }}
          />
      </div>
    );
  }
}

export default ElementLock;