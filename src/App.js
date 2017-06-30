import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { seedFonts, applyFonts } from './actions/actions';
import ReactLoading from 'react-loading';
import Controls from './components/Controls';
import TemplateBuilder from './containers/TemplateBuilder';
import { templates } from './lib/templates';

const StyledControls = styled(Controls)`
  position: fixed;
  bottom: 0;
  left: 0;
`;

class App extends Component {
  componentWillMount(){
    this.props.dispatch(seedFonts());
    this.props.dispatch(applyFonts());
  }

  render() {
    if(this.props.isFetchingSeed || this.props.isFetchingFonts){
      return (
        <ReactLoading type={"bars"} color={"#ff00ae"} height={100} width={100} delay={500}/>
      )
    } else {
      return (
        <div className="App">
          <TemplateBuilder template={templates[0]}/>
          <StyledControls/>
        </div>
      );
    }
  }
}

const mapState = (state) => ({
  isFetchingFonts : state.isFetchingFonts,
  isFetchingSeed : state.isFetchingSeed
});

export default connect(mapState)(App);
