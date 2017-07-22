import React, { Component }           from 'react';
import styled                         from 'styled-components';

import FeatureCard                    from '../components/blocks/FeatureCard';

const FeaturedWrapper = styled.div`
  margin:                             0 auto;
`;

const CardWrapper = styled.div`
  display:               flex;
  flex-flow:             column;
  color:                 #1b1d1f;
  margin:                0 8% 20px 8%;

  @media screen and (min-width: 650px){
    margin:              0 8% 20px 2%;
  }
  @media screen and (min-width: 1400px){
    flex-flow:           row;
    justify-content:     space-around;
    margin:              0 15% 20px 15%;
  }
`;

class Features extends Component {
  render() {
    return (
      <FeaturedWrapper>
        <CardWrapper>
          <FeatureCard key="chartCard" iconType="fa fa-pie-chart" para="0" head="4" />
          <FeatureCard key="cloudCard" iconType="fa fa-cloud-upload" para="1" head="5"/>
          <FeatureCard key="serverCard" iconType="fa fa-server" para="2" head="6"/>
        </CardWrapper>
      </FeaturedWrapper>
    );
  }
}

export default Features;