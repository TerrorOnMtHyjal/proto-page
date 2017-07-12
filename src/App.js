import React, { Component } from 'react';
import { connect } from 'react-redux';
import { seedFonts, applyFonts } from './actions/actions';
import ReactLoading from 'react-loading';
import Controls from './components/Controls';
import TemplateBuilder from './containers/TemplateBuilder';
import { templates } from './lib/templates';
import Menu from './components/Menu';

const menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
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

  render() {
      return (
        <div className="App" id="outer-container">
          <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } styles={menuStyles}>
            <Controls />
          </Menu>
          <div id="page-wrap">
            <TemplateBuilder template={templates[0]}/>
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
