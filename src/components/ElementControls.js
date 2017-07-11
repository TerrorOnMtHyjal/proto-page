import React, { Component } from 'react';
import styled from 'styled-components';
import ToggleButton from 'react-toggle-button';
import { toggleLock, updateActiveFonts, updateCategory } from '../actions/actions';
import { connect } from 'react-redux';
import {RadioGroup, Radio} from 'react-radio-group';
import CategoryList from './CategoryList';

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

const LockControl = styled.div`
  display: flex;
  align-items: center;

  & > i {
    margin-right: 10px;
  }
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

const Categories = styled.div`
  width: 100%;
`;

const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-flow: column;
  padding-left: 20px;
`;

const StyledCategoryList = styled(CategoryList)`

`;

class ElementControls extends Component {
  onRadioChange(type, change){
    if(type === "variant"){
      this.props.dispatch(updateActiveFonts(type, {element: this.props.type, variant : change}));
    } else if(type === "category") {
      this.props.dispatch(updateCategory({element: this.props.type, category : change}));
    }
  }

  render() {
    return (
      <ControlWrapper>

        <ControlHeader>
          <ElementLock>
            <p>{this.props.type}</p>
            <LockControl>
              <i className="fa fa-lock"></i>
              <ToggleButton 
                value={this.props.controls.isLocked[this.props.type]} 
                onToggle={() => this.props.dispatch(toggleLock(this.props.type))} 
                colors={{active : {base: 'rgb(255,0,174)'}}}
              />
            </LockControl>
          </ElementLock>

          <CurrentFont>
            <p>{this.props.activeFonts[this.props.type].family}</p>
          </CurrentFont>
        </ControlHeader>

        <Controls>
          <Variants>
            <StyledRadioGroup name={`${this.props.type}Variants`} selectedValue={this.props.activeFonts[this.props.type].variant} onChange={(value) => this.onRadioChange("variant", value)}>
              {this.props.activeFonts[this.props.type].availableVariants.map(variant => <label key={`${this.props.type}${variant}`}> <Radio value={variant} />{variant}</label>)}
            </StyledRadioGroup>
          </Variants>
          <Categories>
            <StyledCategoryList
              type={this.props.type} 
              categories={{
                selected : this.props.categories[this.props.type], 
                available : this.props.categories.available.filter(category => category !== this.props.categories[this.props.type])
              }}
            />
            {/*<StyledRadioGroup name={`${this.props.type}Categories`} selectedValue={this.props.controls.categories[this.props.type]} onChange={(value) => this.onRadioChange("category", value)}>
              {this.props.categories.available.map(category => <label key={`${this.props.type}${category}`}> <Radio value={category} />{category}</label>)}
            </StyledRadioGroup>*/}
          </Categories>
        </Controls>

      </ControlWrapper>
    );
  }
}

const mapState = (state) => ({
  controls : state.appState.controls,
  activeFonts : state.appState.activeFonts,
  categories : state.appState.controls.categories
});

export default connect(mapState)(ElementControls);