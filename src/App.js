import React, { Component }          from 'react';
import { connect }                   from 'react-redux';
import Joyride                       from 'react-joyride';
import {action as toggleMenu}        from 'redux-burger-menu';
import ReactLoading                  from 'react-loading';
import styled                        from 'styled-components';

import { seedFonts, applyFonts }     from './actions/actions';
import Controls                      from './containers/Controls';
import Menu                          from './components/Menu';
import TemplateBuilder               from './components/TemplateBuilder';
import { template }                  from './lib/templates';

const CogWrapper = styled.div``;

const PageWrapper = styled.div`
  transition: all 0.5s ease-out !important;
  ${props => props.isOpen ? `
    transform: translate3d(0px, 0px, 0px) !important;
    
    @media only screen and (min-width: 600px){
      transform: translate3d(300px, 0px, 0px) !important;
    }

    @media only screen and (min-width: 768px){
      transform: translate3d(200px, 0px, 0px) !important;
    }

    @media only screen and (min-width: 900px){
      transform: translate3d(180px, 0px, 0px) !important;
    }

    @media only screen and (min-width: 1050px){
      transform: translate3d(160px, 0px, 0px) !important;
    }

    @media only screen and (min-width: 1150px){
      transform: translate3d(150px, 0px, 0px) !important;
    }
    `:`
      transform: translate3d(0px, 0px, 0px) !important;
    `
  };
`;

const menuStyles = {
  bmBurgerButton: {
    position:           'fixed',
    left:               '0',
    bottom:             '45px',
    color:              '#ff00ae',
    padding:            '10px 10px 10px 50px',
    borderRadius:       '0 30px 30px 0',
    backgroundColor:    '#273259',
    zIndex:             '1000',
    cursor:             'pointer'
  },
  bmBurgerBars: {},
  bmCrossButton: {
    height:             '24px',
    width:              '24px',
    zIndex:             '100'
  },
  bmCross: {
    background:         '#bdc3c7'
  },
  bmMenuWrap: {
    transition:         'all 0.5s ease-out',
    zIndex:             '3000'
  },
  bmMenu: {
    background:         'linear-gradient(0deg, #36467c 90%, #273259 91%)',
    padding:            '1em 0 0',
    fontSize:           '1.15em'
  },
  bmMorphShape: {
    fill:               '#273259'
  },
  bmItemList: {
    color:              '#b8b7ad',
    minWidth:           '300px'
  },
  bmOverlay: {
    background:         'rgba(0, 0, 0, 0.3)'
  }
}

class App extends Component {
  
  componentWillMount(){
    this.props.dispatch(seedFonts());
    this.props.dispatch(applyFonts());
  }

  componentDidMount(){
    const isOpen = true;
    this.props.dispatch(toggleMenu(isOpen));
  }

  onPageOpen(){
    console.log("run");
  }


  render() {
    return (
      <div id="outer-container">


        <Menu 
          customBurgerIcon={ <CogWrapper><i className="fa fa-cog fa-spin fa-3x" aria-hidden="true"></i></CogWrapper> } 
          pageWrapId="page-wrap" 
          outerContainerId="outer-container" 
          styles={ menuStyles }
        >
          <Controls />
        </Menu>


        <PageWrapper isOpen={this.props.isOpen} id="page-wrap">
          <TemplateBuilder template={template} />
        </PageWrapper>


      </div>
    );
  }
}

const mapState = ({ appState, burgerMenu }) => ({
  isFetchingFonts:  appState.isFetchingFonts,
  isFetchingSeed:   appState.isFetchingSeed,
  isOpen : burgerMenu.isOpen
});

export default connect(mapState)(App);
