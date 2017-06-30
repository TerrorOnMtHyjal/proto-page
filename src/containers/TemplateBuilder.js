import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70vw;
  height: 100vh;
`;

class TemplateBuilder extends Component {

  generateTemplate(template){
    const generatedTemplate = [];

    for(let row in template){
      const Row = styled.div` 
        display: flex;
        width: 100%;
        ${template[row].rules}
      `;

      generatedTemplate.push(<Row>{template[row].elements}</Row>);
    }

    return generatedTemplate;
  }

  render() { 
    return (
      <StyledMain>
        {this.generateTemplate(this.props.template)}
      </StyledMain>
    );
  }
}

export default TemplateBuilder;