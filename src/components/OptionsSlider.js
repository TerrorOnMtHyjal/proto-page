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
  background-color:                     ${props => props.checked ? "#0c6ba7" : "#0e83cd"};
  
  & > p {
    transition:                         padding-left 0.1s ease-in-out;
    padding-left:                       ${props => props.checked ? "10px" : undefined};
  }

  & > i {
    opacity:                            0.2;
  }

  &:hover {
    background-color:                   ${props => !props.checked ? "orange" : undefined};

    & > p {
      padding-left:                     ${props => !props.checked ? "10px" : undefined}
    }
  }
`;

class OptionsSlider extends Component {

  generateOptions(items){
    return items.map(item => {
      const checkedItem = this.props.current.includes(item);
         
      if(checkedItem){
        return(
          <OptionButton 
            checked 
            key={ `${item}${this.props.type}` } 
            onClick={ () => this.props.dispatch(updateActiveFont(item, this.props.type, this.props.loadedMenu)) }
          >
            <p>{ formatOption(item) }</p> 
            <i className="fa fa-check fa-lg" aria-hidden="true"></i> 
          </OptionButton>
        );
      } else {
        return (
          <OptionButton 
            key={ `${item}${this.props.type}` } 
            onClick={ () => this.props.dispatch(updateActiveFont(item, this.props.type, this.props.loadedMenu)) }
          > 
            <p>{ formatOption(item) }</p>
          </OptionButton>
        );
      }
    });
  }

  render() {
    return (
      <Options isOpen={ this.props.isOpen } items={ this.props.items }>
        { this.generateOptions(this.props.items) }
      </Options>
    );
  }
}

export default connect()(OptionsSlider);