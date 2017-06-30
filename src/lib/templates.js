import React from 'react';
import styled from 'styled-components';
import Paragraph from '../components/blocks/Paragraph';
import Header from '../components/blocks/Header';
import Subheader from '../components/blocks/Subheader';
import Image from '../components/blocks/Image';
import FeatureCard from '../components/blocks/FeatureCard';
import Socials from '../components/blocks/Socials';

//change to array
const template1 = {
  1 : {
    rules : `
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      flex-flow : column;
      text-align: center;
      justify-content : center;
      align-items : center;
      height : 400px;
      background: linear-gradient(to right, #4389A2, #5C258D);
      color : white;
      border-bottom: 2px solid gray;
    `,
    elements : [<Header rules="width: 60%;" />]
  },
  2 : {
    rules : `
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
    `,
    elements : [<Subheader />, <Socials />]
  },
  3 : {
    rules : `
      margin: 0;
      padding: 0;
    `,
    elements : [
      <Paragraph /> 
    ]
  },
  4 : {
    rules : `
      justify-content: space-around;
      margin-top: 50px;
    `,
    elements : [<FeatureCard />, <FeatureCard />, <FeatureCard />]
  },
  5 : {
    rules : `
      justify-content : space-between;
      margin-top: 500px;
    `,
    elements : [<Paragraph rules="width : 40%; color: purple;"/>, <Paragraph rules="width : 40%;"/>]
  }
};

export const templates = [template1];