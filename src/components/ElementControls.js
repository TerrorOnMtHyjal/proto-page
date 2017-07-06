import React, { Component } from 'react';
import styled from 'styled-components';
import ToggleButton from 'react-toggle-button';
import {RadioGroup, Radio} from 'react-radio-group';

const ControlWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
  width: 100%;
`;

const ControlHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 700;
  width: 100%;
`;

const Controls = styled.div`
  display: flex;
  flex-flow: column;
`;

const CurrentFont = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: italic;
  margin-bottom: 10px;
`;

const Variants = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #333;
  width: 100%;
`;

const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-flow: column;
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
          <Variants>
            <StyledRadioGroup>
              {this.props.activeFont.availableVariants.map(variant => {
                return (
                  <label>
                    <Radio value={variant} />{variant}
                  </label>
                )
              })}
            </StyledRadioGroup>
          </Variants>
        </Controls>
      </ControlWrapper>
    );
  }
}

export default ElementControls;