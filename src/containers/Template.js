import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from '../components/blocks/Navbar';
import Hero from './Hero';
import Call from './Call';
import Features from './Features';


const TemplateWrapper = styled.main`
  display:                              flex;
  flex-direction:                       column;
  width:                                100vw;
  color:                                white;
`;

class Template extends Component {
  render() {
    return (
      <TemplateWrapper>
        <Navbar/>
        <Hero />
        <Call />
        <Features />
      </TemplateWrapper>
    );
  }
}

export default Template;