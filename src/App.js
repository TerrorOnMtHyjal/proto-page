import React, { Component }          from 'react';
import { connect }                   from 'react-redux';
import Joyride                       from 'react-joyride';
import {action as toggleMenu}        from 'redux-burger-menu';
import ReactLoading                  from 'react-loading';
import styled, { ThemeProvider }     from 'styled-components';

import { seedFonts, applyFonts }     from './actions/actions';
import Controls                      from './containers/Controls';
import Menu                          from './components/Menu';
import Template                      from './containers/Template';


const CogWrapper = styled.div`

`;

const PageWrapper = styled.div`
  transition: all 0.5s ease-out !important;
  transform: translate3d(0px, 0px, 0px) !important;
  ${props => props.isOpen && `  
    @media only screen and (min-width: 600px){
      transform: translate3d(280px, 0px, 0px) !important;
    }

    @media only screen and (min-width: 1400px){
      transform: translate3d(100px, 0px, 0px) !important;
    }`
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
    this.props.dispatch(applyFonts(["header", "subheader", "paragraph"]));
  }

  componentDidMount(){
    const isOpen = true;
    setTimeout(function() { 
      this.props.dispatch(toggleMenu(isOpen)); 
    }.bind(this), 2500 );
  }

  generateTheme(elements){
    const newTheme = {}

    for(let current in elements){
      const { family, variant, size } = elements[current];
      let weight = variant.replace(/\D/g,'');
      let style = variant.replace(/[0-9]/g, '');

      if(variant === "regular"){
        weight = "normal";
        style = "normal";
      } else if(variant === "italic"){
        weight = "normal";
        style = "italic";
      }

      newTheme[current] = {
        family,
        weight,
        variant,
        style,
        size
      };
    }
    return newTheme;
  }
  
  render() {
    return (
      <ThemeProvider theme={this.generateTheme(this.props.activeFonts)}>
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
            <Template/>
          </PageWrapper>

        </div>
      </ThemeProvider>
    );
  }
}

const mapState = ({ appState, burgerMenu }) => ({
  isFetchingFonts:  appState.isFetchingFonts,
  isFetchingSeed:   appState.isFetchingSeed,
  isOpen: burgerMenu.isOpen,
  activeFonts: appState.activeFonts
});

export default connect(mapState)(App);
