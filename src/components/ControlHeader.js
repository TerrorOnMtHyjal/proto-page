import React, { Component } from 'react';
import ElementLock from './ElementLock';
import styled from 'styled-components';
import { connect } from 'react-redux';
import OptionsSlider from './OptionsSlider';

const activeStyles = `
  background-color: #367c39;
  box-shadow: 0 2px #2f6a31;
  transform: translateY(2px);
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const Controls = styled.div`
  display: flex;
  padding: 0 20px;
`;

const CategoryButton = styled.button`
  ${props => props.disabled ? `
      background-color: #9E9E9E;
      color: #757575;
    `:`
      background-color: #4CAF50;
      box-shadow: 0 3px #2f6a31;
      color: white;
      cursor: pointer;

      &:hover {
        background-color: #3e8e41;
      }

      &:active {
        ${activeStyles}
    }`
  }

  display: flex;
  margin-right: 15px;
  width: 40px;
  height: 40px;
  max-width: 40px;
  max-height: 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  overflow: hidden;
  font-size: 30px;
  border: none;
  border-radius: 5px;

  ${props => props.isOpen && activeStyles}

  &:focus {
    outline: 0;
  }
`;

const FontControls = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-overflow: ellipsis;
`;

const CurrentFont = styled.p`
  width: 200px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: italic;
  opacity: 0.8;
`;

const CategoryLetter = styled.p`
  ${props => {
    switch(props.family){
      
      case "serif":
        return `font-family: Lora;
                font-weight: 700;
                font-size: 1.1em;
                margin-top: -1px;
                &:before {
                  content: "S"
                }`

      case "sans-serif":
        return `font-family: Roboto;
                font-weight: 700;
                font-size: 1.1em;
                &:before {
                  content: "S"
                }`

      case "display":
        return `font-family: Rye;
                margin-top: 2px;
                margin-left: 1px;
                &:before {
                  content: "D"
                }`
        
      case "handwriting":
        return `font-family: "Kaushan Script";
                font-size: 32px;
                margin-left: -5px;
                margin-top: -4px;
                &:before {
                  content: "H"
                }`

      case "monospace":
        return `font-family: Inconsolata;
                font-weight: 700;
                font-size: 1.25em;
                &:before {
                  content: "M"
                }`

      default:
        return '';
    }
  }}
`;

class ControlHeader extends Component {

  constructor(props){
    super(props);

    this.state = {
      isOpen : false
    }
  }

  changeMenuState(){
    this.setState({isOpen : !this.state.isOpen})
  }

  render() {
    
    return (
      <HeaderWrapper>

        <Controls>
          <CategoryButton disabled={ this.props.locked } isOpen={ !this.props.locked && this.state.isOpen } onClick={() => this.changeMenuState()}>
            <CategoryLetter family={ this.props.currentCategory }></CategoryLetter> 
          </CategoryButton>

          <FontControls>
            <ElementLock locked={ this.props.locked } type={ this.props.type }/>
            <CurrentFont> { this.props.family } </CurrentFont>
          </FontControls>
        </Controls>

        <OptionsSlider 
          current={[this.props.currentCategory]} 
          type={this.props.type} 
          isOpen={!this.props.locked && this.state.isOpen} 
          loadedMenu={"category"} 
          items={this.props.categories}
        />

      </HeaderWrapper>
    );
  }
}

const mapState = ({ appState }, ownProps) => {
  const activeFont = appState.activeFonts[ownProps.type];

  return {
    currentCategory : activeFont.category,
    categories : appState.categories
  }
}

export default connect(mapState)(ControlHeader);