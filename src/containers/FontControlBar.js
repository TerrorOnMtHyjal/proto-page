import React, { Component }                 from 'react';
import styled                               from 'styled-components';
import { connect }                          from 'react-redux';

import { formatOption }                     from '../lib/tools';
import OptionsSlider                        from '../components/OptionsSlider';


const activeStyles = `
  background-color:                         #1565C0;
  box-shadow:                               0 1px #0D47A1;
  transform:                                translateY(1px);
`;

const ControlButtonsWrapper = styled.div`
  display:                                  flex;
  margin:                                   20px 20px 0 20px;
`;

const ControlButton = styled.button`

  ${props => props.disabled ? `
    background-color:                       #9E9E9E;
    color:                                  #757575;
    cursor:                                 disabled;

    &::after {
      color:                                gray;
      background-color:                     #424242;
    }
  `:`
    background-color:                       #1E88E5;
    box-shadow:                             0 2px #0D47A1;
    color:                                  white;
    cursor:                                 pointer;

    &::after {
      color:                                white;
      background-color:                     #FF5722;
    }

    &:hover {
      background-color:                     #1976D2;
    }

    &:active {
      ${activeStyles}
    }`
  }
  
  transition:                               background-color 0.25s ease-out, color 0.25s ease-out, box-shadow 0.25s ease-out;
  position:                                 relative;
  display:                                  flex;
  align-items:                              center;
  height:                                   40px;
  user-select:                              none;
  width:                                    50%;
  text-align:                               center;
  text-decoration:                          none;
  border:                                   none;
  border-radius:                            0 4px 4px 0;


  ${props => props.controlType === "variant" && props.counter > 1 ? `
      &::after {
        transition:                         background-color 0.25s ease-out, color 0.25s ease-out;
        position:                           absolute;
        left:                               -10px;
        top:                                -12.5px;
        display:                            flex;
        justify-content:                    center;
        align-items:                        center;
        font-size:                          14px;
        font-weight:                        bold;
        font-style:                         italic;
        z-index:                            100;
        content:                            '${props.counter}';
        width:                              25px;
        height:                             25px;
        border-radius:                      15px;
      }`
    : `&::after {}`
  }

  ${props => props.controlType === props.state.loadedMenu && props.state.isOpen && !props.disabled ? activeStyles : undefined};

  &:focus {
    outline:                                0;
  }
`;

const Icon = styled.i`
  margin-left:                            10px;
  width:                                  15%;
`;

const CurrentSelection = styled.p`
  width:                                  85%;
  text-align:                             center;
  font-size:                              17px;
  font-weight:                            bold;
`;

class FontControlBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      isOpen : false,
      loadedMenu : "variant"
    };
  }

  changeMenuState(clicked){

    if(clicked === this.state.loadedMenu && this.state.isOpen ){
      this.setState({ ...this.state.loadedMenu, isOpen : false })
    } else {
      this.setState({ loadedMenu : clicked, isOpen : true })
    }
  }

  render() {
    const {type, locked, variant, currentVariant, currentSize} = this.props;
    const variantIsDisabled = locked || variant.length == 1;
    const sizeIsDisabled = locked;

    const variantButtonStyles = {
      borderRight:                         "1px solid #0D47A1",
      borderRadius:                        "4px 0 0 4px"
    };

    return (
      <div>
        <ControlButtonsWrapper>

          <ControlButton
            style={variantButtonStyles} 
            state={this.state} 
            disabled={ variantIsDisabled } 
            controlType="variant" 
            counter={ variant.length } 
            onClick={ () => this.changeMenuState("variant") }
          >
            <Icon className="fa fa-italic fa-lg" aria-hidden="true"></Icon> 
            <CurrentSelection>{formatOption(currentVariant)}</CurrentSelection>
          </ControlButton>

          <ControlButton 
            state={this.state} 
            disabled={sizeIsDisabled} 
            controlType="size" 
            onClick={() => this.changeMenuState("size")}
          >
            <Icon className="fa fa-text-height fa-lg" aria-hidden="true"></Icon> 
            <CurrentSelection>{formatOption(currentSize)}</CurrentSelection>
          </ControlButton>

        </ControlButtonsWrapper>

        <OptionsSlider 
          type={this.props.type} 
          current={[currentVariant, currentSize]} 
          isOpen={(!locked && variant.length > 1) && this.state.isOpen} 
          loadedMenu={this.state.loadedMenu} 
          items={this.props[this.state.loadedMenu]} 
        />
      </div>
    );
  }
}

const mapState = ({ appState }, ownProps) => {
  const activeFont = appState.activeFonts[ownProps.type];

  return {
    currentVariant : activeFont.variant,
    currentSize : activeFont.size,
    variant : activeFont.availableVariants,
    size : appState.sizes
  }
};

export default connect(mapState)(FontControlBar);