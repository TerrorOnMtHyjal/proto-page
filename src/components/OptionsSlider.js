import React, { Component }             from 'react';
import styled                           from 'styled-components';
import { connect }                      from 'react-redux';

import { updateActiveFont }             from '../actions/actions';
import { formatOption }                 from '../lib/tools';


const OPTION_HEIGHT =                   40;
const OPTION_VERTICAL_PADDING =         10;
const OPTION_HORIZONTAL_PADDING =       20;

const Options = styled.div`
  height:                               ${props => props.isOpen ? `${props.items.length * OPTION_HEIGHT}px` : "0px"};
  transition:                           height 0.5s ease-in-out;
  overflow-y:                           hidden;
  margin-top:                           10px;
  background-color:                     #0e83cd;
`;

const OptionButton = styled.div`
  cursor:                               pointer;
  user-select:                          none;
  border-bottom:                        1px solid rgba(39, 50, 89, 0.15);
  display:                              flex;
  align-items:                          center;
  justify-content:                      space-between;
  height:                               ${OPTION_HEIGHT}px;
  padding:                              ${OPTION_VERTICAL_PADDING}px ${OPTION_HORIZONTAL_PADDING}px;
  outline:                              none;
  background-color:                     #0e83cd;
  transition:                           padding-left 0.1s ease-in-out;

  &:hover {
    background-color:                   orange;
    padding-left: 30px;
  }
`;

const Icon = styled.div`
  opacity: 0.2;
`;

class OptionsSlider extends Component {
  generateItems(items){
    return items.map(item => {
      const isChecked = this.props.current.includes(item);
      const checkedStyles = {
        backgroundColor: "#0c6ba7",
        paddingLeft: "30px",
      };

      return (
        <OptionButton 
        style={isChecked ? checkedStyles : undefined}
        key={ `${item}${this.props.type}` } 
        onClick={ () => this.props.dispatch(updateActiveFont(item, this.props.type, this.props.loadedMenu))}
        >
          <p>{formatOption(item)}</p>
          {isChecked && <Icon className="fa fa-check fa-lg"/>}
        </OptionButton>
      );
    });
  }

  render() {
    const optionsHeight = {
      height: this.props.isOpen ? `${this.props.items.length * OPTION_HEIGHT}px` : "0px"
    };

    return (
      <Options style={optionsHeight}>
        { this.generateItems(this.props.items) }
      </Options>
    );
  }
}

export default connect()(OptionsSlider);