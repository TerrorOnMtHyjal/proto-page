import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import OptionsSlider from './OptionsSlider';
import { formatOption } from '../lib/tools';

const ControlButtonsWrapper = styled.div`
  display: flex;
  margin: 20px 20px 0 20px;

  &:button:first-child {
    opacity: 0.2;
  }
`;

const ControlButton = styled.button`
  height: 40px;
  cursor: pointer;
  user-select: none;
  display: flex;
  width: 130px;

  & > i {
    flex-grow: 1;
  }

  & > p {
    flex-grow: 4;
  }
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

    return (
      <div>

        <ControlButtonsWrapper>
          <ControlButton onClick={() => this.changeMenuState("variant")}>
            <i className="fa fa-italic fa-lg" aria-hidden="true"></i> 
            <p>{formatOption(type.currentVariant)}</p>
          </ControlButton>
          <ControlButton onClick={() => this.changeMenuState("size")}>
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