import React, { Component } from 'react';
import styled from 'styled-components';

class Image extends Component {
  render() {

    const StyledImage = styled.img`
      ${this.props.rules}
    `;

    return (
      <StyledImage src={`http://lorempixel.com/${this.props.imgWidth}/${this.props.imgHeight}`} />
    );
  }
}

export default Image;