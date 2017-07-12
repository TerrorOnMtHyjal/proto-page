import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const ControlButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const ControlButton = styled.button`

`;

//convert height and padding to constants
const OptionButton = styled.div`
  height: 25px;
  padding: 5px 20px;
  display: block;
  outline: none;

  &:hover {
    background-color: orange;
  }
`;

const OptionsWrapper = styled.div`
  background-color: #0e83cd;
`;

//convert height and padding to constants
const Options = styled.div`
  height: ${props => props.isOpen ? `${props.items * 35}px` : "0px"};
  transition: height 0.5s ease-in-out;
  overflow-y: hidden;
`;

const CheckedOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;

  &:hover {
    background-color: orange;
  }
`;

class FontControlBar extends Component {

  constructor(props){
    super(props);

//use loadedMenu to trigger isOpen state
    this.state = {
      isOpen : false,
      loadedMenu : "default"
    }
  }

  changeMenuState(clicked){
    if(clicked === this.state.loadedMenu && this.state.isOpen){
      this.setState({...this.state.loadedMenu, isOpen : false}, () => {

      })
    } else {
      this.setState({isOpen: true, loadedMenu : clicked}, () => {

      });
    }
  }

  formatOption(option){
    let formattedOption = option;

    if(typeof option === 'string'){
      let tempFormat = option.replace(/(\d+)/g, (_, num) => {
        return ' ' + num + ' ';
      }).trim();

      formattedOption = tempFormat.replace(/(\b[a-z](?!\s))/g, x => x.toUpperCase());
    }

    return formattedOption;
  }

  generateOptions(menu){
    return this.props[menu].map(option => {
      const baseOption =  <OptionButton onClick={() => console.log(option, this.props.type)}>{this.formatOption(option)}</OptionButton>;

      if(option === this.props.category || option === this.props.variant || option === this.props.size){
        return (
        <CheckedOption>
          {baseOption}
          <i className="fa fa-check fa-lg" aria-hidden="true"></i>
        </CheckedOption>
        );
      }else{
        return baseOption;
      }
    });
  }


  render() {
    const type = this.props;

    return (
      <div>
        <ControlButtonsWrapper>
          <ControlButton onClick={() => this.changeMenuState("categories")}>
            <i className="fa fa-list fa-lg" aria-hidden="true"></i> {type.category}
          </ControlButton>
          <ControlButton onClick={() => this.changeMenuState("availableVariants")}>
            <i className="fa fa-italic fa-lg" aria-hidden="true"></i> {type.variant}
          </ControlButton>
          <ControlButton onClick={() => this.changeMenuState("sizes")}>
            <i className="fa fa-text-height fa-lg" aria-hidden="true"></i> {type.size}x
          </ControlButton>
        </ControlButtonsWrapper>

        <OptionsWrapper>
          <Options isOpen={this.state.isOpen} items={this.props[this.state.loadedMenu].length}>
            {this.generateOptions(this.state.loadedMenu)}
          </Options>
        </OptionsWrapper>
      </div>
    );
  }
}

const mapState = ({ appState }, ownProps) => {
  return {
    ...appState.activeFonts[ownProps.type],
    sizes : appState.sizes,
    categories : appState.categories,
    default : []
  }
};

export default connect(mapState)(FontControlBar);