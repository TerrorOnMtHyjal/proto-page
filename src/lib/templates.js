import React from 'react';
import FeatureCard from '../components/blocks/FeatureCard';
import Socials from '../components/blocks/Socials';
import Text from '../components/blocks/Text';
import Navbar from '../components/blocks/Navbar';
import Button from '../components/blocks/Button';

export const template = [
  {
    rowStyle : `
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1000;
      height: 105px;
      background-color: transparent;
      color: white;
    `,
    row : {
      elements : [<Navbar key="navbar"/>]
    }
  },
  {
    rowStyle : `
      width: 100vw;
      position: relative;
      display: flex;
      align-items: center;
      background-image: url(https://static.pexels.com/photos/186461/pexels-photo-186461.jpeg);
      background-attachment: fixed;
      background-position: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      color : white;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to left, #00d2ff, #928dab);
        opacity: .4;
      }
    `,
    row : {
      wrapper : {
        baseStyle : `
          z-index: 10;
          display: flex;
          align-items: left;
          flex-flow: column;
          font-size: 16px;
          margin: 105px 2% 0 2%;

          & > h1 {
            font-size: 2.5em;
          }

          & > h3 {
            margin-top: 30px;
          }
        `,
        medias : {
          "480" : `
            font-size: 20px;
          `,
          "768" : `
            font-size: 28px;
            margin: 105px 15% 0 15%;
            width: 70%;
          `,
          "1024" : `
            font-size: 30px;
            margin: 150px 15% 0 15%;
            width: 60%;
          `,
          "1200" : `
            width: 50%;
          `,
          "1650" : `
            font-size: 32px;
            margin: 150px 15% 75px 15%;
            width: 35%;     
          `
        }
      },
      elements : [
        <Text key="heroHeader" type="header" tag="h1" string="0" />,
        <Text key="heroSubheader" type="subheader" tag="h3" string="0" />,
        <Button key="heroButton" />
      ],
    }
  },
  {
    rowStyle : `
      display: flex;
      justify-content: center;
      width: 100%;
      text-align: center;
      background-color: #white;
      padding: 50px 0;
      color: #1b1d1f;
    `,
    row : {
      wrapper : {
        baseStyle : `
          display: flex;
          flex-flow: column;
          width: 80%;
          
          & > h1 {
            font-size: 1.5em;
            margin-bottom: 20px;
            text-transform: uppercase;
          }

          & > h3 {
            font-size: 0.9em;
            margin-bottom: 35px;
          }
        `,
        medias : {
          "650" : `
            font-size: 18px;
          `,
          "768" : `
            font-size: 20px;
          `,
          "1024" : `
            font-size: 22px;
          `,
          "1650" : `
            font-size: 24px;
          `
        }
      },
      elements : [
                  <Text key="callHeader" type="header" string="1" tag="h1"/>, 
                  <Text key="callSubheader" type="subheader" string="1" tag="h3"/>
                ]
    }
  },
  {
    rowStyle : `
      width: 100%;
      background-color: white;
      margin: 0 auto;
    `,
    row : {
      wrapper : {
        baseStyle : `
          display: flex;
          flex-flow: column;
          color: #1b1d1f;
          margin: 0 8% 20px 8%;
        `,
        medias : {
          "650" : `
            margin: 0 8% 20px 2%;
          `,
          "1400" : `
            flex-flow: row;
            justify-content: space-around;
            margin: 0 15% 20px 15%;
          `,
        }
      },
      elements :[
                  <FeatureCard key="chartCard" iconType="fa fa-pie-chart" para="0" head="4" />,
                  <FeatureCard key="cloudCard" iconType="fa fa-cloud-upload" para="1" head="5"/>,
                  <FeatureCard key="serverCard" iconType="fa fa-server" para="2" head="6"/>
                ]
    }
  }
];
