import React, { Component } from 'react';
import styled from 'styled-components';
import ToggleButton from 'react-toggle-button';

const ControlWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 20px;
  padding: 10px 0;
`;

const ControlHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 700;
`;

const Controls = styled.div`
  display: flex;
  flex-flow: column;
  width: 250px;
`;

const CurrentFont = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: italic;
`;

const Variant = styled.div`

`;

class ElementControls extends Component {
  render() {
    return (
      <ControlWrapper>
        <ControlHeader>
          <p>{this.props.type}</p>
            <ToggleButton
              value={this.props.isLocked} 
              onToggle={() => this.props.onToggle(this.props.type)} 
              colors={{
                active : {
                  base: 'rgb(255,0,174)'
                }
              }}
            />
        </ControlHeader>
        <Controls>
          <CurrentFont>
            <p>{this.props.activeFont.family}</p>
          </CurrentFont>
          {/*<Variant>
            <p>Variant: {this.props.activeFont.variant}</p>
          </Variant>*/}
        </Controls>
      </ControlWrapper>
    );
  }
}

export default ElementControls;