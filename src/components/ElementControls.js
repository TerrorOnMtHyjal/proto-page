import React, { Component } from 'react';
import styled from 'styled-components';
import ToggleButton from 'react-toggle-button';
import { toggleLock } from '../actions/actions';
import { connect } from 'react-redux';
import { updateActiveFonts } from '../actions/actions';
import {RadioGroup, Radio} from 'react-radio-group';

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
`;

const ElementLock = styled.div`
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
  padding-left: 20px;
`;

class ElementControls extends Component {
  onRadioChange(variant){
    this.props.dispatch(updateActiveFonts("variant", {element: this.props.type, variant }));
    this.forceUpdate();
  }

  render() {
    console.log(this.props.type, this.props.activeFonts[this.props.type].variant)
    return (
      <ControlWrapper>

        <ControlHeader>
          <ElementLock>
            <p>{this.props.type}</p>
            <ToggleButton 
              value={this.props.controls.isLocked[this.props.type]} 
              onToggle={() => this.props.dispatch(toggleLock(this.props.type))} 
              colors={{active : {base: 'rgb(255,0,174)'}}}
            />
          </ElementLock>

          <CurrentFont>
            <p>{this.props.activeFonts[this.props.type].family}</p>
          </CurrentFont>
        </ControlHeader>

        <Controls>
          <Variants>
            <StyledRadioGroup name={`${this.props.type}Variants`} selectedValue={this.props.activeFonts[this.props.type].variant} onChange={(value) => this.onRadioChange(value)}>
              {this.props.activeFonts[this.props.type].availableVariants.map(variant => <label key={`${this.props.type}${variant}`}> <Radio value={variant} />{variant}</label>)}
            </StyledRadioGroup>
          </Variants>
        </Controls>

      </ControlWrapper>
    );
  }
}

const mapState = (state) => ({
  controls : state.appState.controls,
  activeFonts : state.appState.activeFonts
});

export default connect(mapState)(ElementControls);