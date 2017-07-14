import React, { Component } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

class TemplateBuilder extends Component {

  generateTemplate(template){
    const generatedTemplate = [];

    for(let row in template){
      const Row = styled.div` 
        display: flex;
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