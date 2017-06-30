import React from 'react';
import styled from 'styled-components';
import Paragraph from '../components/blocks/Paragraph';
import Header from '../components/blocks/Header';
import Subheader from '../components/blocks/Subheader';

const SParagraph = styled(Paragraph)`
  width: 25%;
`;

const template1 = {
  1 : {
    rules : `
      flex-flow : column;
      text-align: center;
      justify-content : center;
      align-items : center;
      height : 500px;
      background-color: salmon;
      color: white;
    `,
    elements : [<Header />, <Subheader />]
  },
  2 : {
    rules : `
      justify-content : space-around;
      margin-top: 20px;
    `,
    elements : [
      <Paragraph rules={
        `width: 40%;`
        } />, 
      <Paragraph rules={
      `width: 40%`
      } /> 
    ]
  }
};

export const templates = [template1];