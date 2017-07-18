import React, { Component } from 'react';
import { connect } from 'react-redux';
import { seedFonts, applyFonts } from './actions/actions';
import ReactLoading from 'react-loading';
import Controls from './components/Controls';
import TemplateBuilder from './containers/TemplateBuilder';
import { template } from './lib/templates';
import Menu from './components/Menu';
import styled from 'styled-components';

const CogWrapper = styled.div`

`;

const menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    left: '0',
    bottom: '45px',
    color: '#ff00ae',
    padding:"10px 10px 10px 50px",
    borderRadius: "0 30px 30px 0",
    backgroundColor: "#373a47"
  },
  bmBurgerBars: {

  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 0 0',
    fontSize: '1.15em',
    width: '100%'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class App extends Component {
  componentWillMount(){
    this.props.dispatch(seedFonts());
    this.props.dispatch(applyFonts());
  }

//move menu and styles to Menu.js, export entire component
  render() {
      return (
        <div id="outer-container">
          <Menu customBurgerIcon={ <CogWrapper><i className="fa fa-cog fa-spin fa-3x" aria-hidden="true"></i></CogWrapper> } pageWrapId="page-wrap" outerContainerId="outer-container" styles={menuStyles}>
            <Controls />
          </Menu>
          <div id="page-wrap">
            <TemplateBuilder template={template} />
          </div>
        </div>
      );
    }
}

const mapState = (state) => ({
  isFetchingFonts : state.appState.isFetchingFonts,
  isFetchingSeed : state.appState.isFetchingSeed
});

export default connect(mapState)(App);
