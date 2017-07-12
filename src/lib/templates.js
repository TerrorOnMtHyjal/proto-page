import React from 'react';
import FeatureCard from '../components/blocks/FeatureCard';
import Socials from '../components/blocks/Socials';
import Text from '../components/blocks/Text';

//change to array
const template1 = {
  1 : {
    rules : `
      width: 100vw;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      flex-flow : column;
      text-align: center;
      justify-content : center;
      align-items : center;
      height : 400px;
      background: linear-gradient(to right, #4389A2, #5C258D);
      color : white;
      border-bottom: 2px solid gray;
    `,
    elements : [<Text type="header" tag="h1" rules="width: 60%"/>]
  },
  2 : {
    rules : `
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
    `,
    elements : [<Text type="subheader" tag="h3" />, <Socials />]
  },
  3 : {
    rules : `
      margin: 0;
      padding: 0;
    `,
    elements : [
      <Text type="paragraph" tag="p"/> 
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
      margin-top: 50px;
    `,
    elements : [<Text type="paragraph" tag="p" rules="width : 40%; color: purple;"/>, <Text type="paragraph" tag="p" rules="width : 40%;"/>]
  }
};

export const templates = [template1];