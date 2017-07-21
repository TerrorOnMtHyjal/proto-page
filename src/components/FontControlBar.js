import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import OptionsSlider from './OptionsSlider';
import { formatOption } from '../lib/tools';

const activeStyles = `
  background-color: #1565C0;
  box-shadow: 0 1px #0D47A1;
  transform: translateY(1px);
`;

const ControlButtonsWrapper = styled.div`
  display: flex;
  margin: 20px 20px 0 20px;
`;

class FontControlBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      isOpen : false,
      loadedMenu : "variant"
    }
  }

  changeMenuState(clicked){
    if(clicked === this.state.loadedMenu && this.state.isOpen){
      this.setState({...this.state.loadedMenu, isOpen : false}, () => {

      })
    } else {
      this.setState({loadedMenu : clicked, isOpen : true}, () => {

      });
    }
  }

  render() {

    const type = this.props;
    const ControlButton = styled.button`
      position: relative;
      display: flex;
      align-items: center;
      height: 40px;
      cursor: pointer;
      user-select: none;
      width: 50%;
      background-color: #1E88E5;
      color: white;
      text-align: center;
      text-decoration: none;
      border: none;
      box-shadow: 0 2px #0D47A1;
      cursor: pointer;

      ${props => props.controlType === "variant" ? `
          border-right: 1px solid #0D47A1;
          border-radius: 4px 0 0 4px;`
        : `border-radius: 0 4px 4px 0;`
      }

      ${props => props.controlType === "variant" && props.counter > 1 ? `
          &:after {
            position: absolute;
            left: -10px;
            top: -12.5px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: bold;
            font-style: italic;
            z-index: 100;
            content: '${props.counter}';
            color: white;
            background-color: #FF5722;
            width: 25px;
            height: 25px;
            border-radius: 15px;
          }`
        : undefined
      }

      ${props => props.controlType === this.state.loadedMenu && this.state.isOpen ? activeStyles : undefined};

      & > i {
        margin-left: 10px;
        width: 15%;
        color: #0D47A1;
      }

      & > p {
        width: 85%;
        text-align: center;
        font-size: 17px;
        font-weight: bold;
        margin-right: 5px;
      }

      &:hover {
        background-color: #1976D2;
      }

      &:focus {
        outline: 0;
      }

      &:active {
        ${activeStyles}
      }
  `;
    return (
      <div>

        <ControlButtonsWrapper>
          <ControlButton controlType="variant" counter={this.props.variant.length} onClick={() => this.changeMenuState("variant")}>
            <i className="fa fa-italic fa-lg" aria-hidden="true"></i> 
            <p>{formatOption(type.currentVariant)}</p>
          </ControlButton>
          <ControlButton controlType="size" onClick={() => this.changeMenuState("size")}>
            <i className="fa fa-text-height fa-lg" aria-hidden="true"></i> 
            <p>{formatOption(type.currentSize)}</p>
          </ControlButton>
        </ControlButtonsWrapper>

        <OptionsSlider 
          type={this.props.type} 
          current={[this.props.currentVariant, this.props.currentSize]} 
          isOpen={this.state.isOpen} 
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