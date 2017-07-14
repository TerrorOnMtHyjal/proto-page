import React from 'react';
import FeatureCard from '../components/blocks/FeatureCard';
import Socials from '../components/blocks/Socials';
import Text from '../components/blocks/Text';
import Navbar from '../components/blocks/Navbar';

export const template1 = [
  {
    rules : `
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1000;
      height: 100px;
      width: 100vw;
      background-color: transparent;
      color: white;
    `,
    elements : [<Navbar/>]
  },
  {
    rules : `
      width: 100vw;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      flex-flow : column;
      text-align: center;
      justify-content : center;
      align-items : center;
      height : 800px;
      background-image: url(https://static.pexels.com/photos/325229/pexels-photo-325229.jpeg);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      color : white;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb);
        opacity: .2; 
      }
    `,
    elements : [<Text type="header" tag="h1" rules="width: 70%; z-index: 100;"/>]
  },
  {
    rules : `
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
    `,
    elements : [<Text type="subheader" tag="h3" />, <Socials />]
  },
  {
    rules : `
      margin: 0;
      padding: 0;
    `,
    elements : [
      <Text type="paragraph" tag="p"/> 
    ]
  },
  {
    rules : `
      justify-content: space-around;
      margin-top: 50px;
    `,
    elements : [<FeatureCard />, <FeatureCard />, <FeatureCard />]
  },
  {
    rules : `
      justify-content : space-between;
      margin-top: 50px;
    `,
    elements : [<Text type="paragraph" tag="p" rules="width : 40%; color: purple;"/>, <Text type="paragraph" tag="p" rules="width : 40%;"/>]
  }
];