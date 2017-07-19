import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateActiveFont } from '../actions/actions';
import { formatOption } from '../lib/tools';

const OPTION_HEIGHT = 40;
const OPTION_VERTICAL_PADDING = 10;
const OPTION_HORIZONTAL_PADDING = 20;
const OPTION_TOTAL_HEIGHT = (OPTION_VERTICAL_PADDING * 2) + OPTION_HEIGHT;

const Options = styled.div`
  background-color: #0e83cd;
  height: ${props => props.loadedMenu ? `${props.items.length * OPTION_TOTAL_HEIGHT}px` : "0px"};
  transition: height 0.5s ease-in-out;
  overflow-y: hidden;
`;

const OptionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${OPTION_HEIGHT}px;
  padding: ${OPTION_VERTICAL_PADDING}px ${OPTION_HORIZONTAL_PADDING}px;
  outline: none;

  &:hover {
    background-color: orange;
  }
`;

class OptionsSlider extends Component {

  generateOptions(items){
    console.log(items && items.length)
    if(items){
      return items.map(item => { 
        return (
          <OptionButton key={`${item}${this.props.type}`} onClick={() => this.props.dispatch(updateActiveFont(item, this.props.type, this.props.loadedMenu))}>
            <p>{formatOption(item)}</p>
          </OptionButton>
        ) 
      });
    } else {
      return [];
    }
  }

  render() {
    return (
      <Options loadedMenu={this.props.loadedMenu} items={this.props.items}>
        {this.generateOptions(this.props.items)}
      </Options>
    );
  }
}

export default connect()(OptionsSlider);