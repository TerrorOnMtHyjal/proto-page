import React, { Component }                   from 'react';
import styled                                 from "styled-components";

const NavbarWrapper = styled.div`
  position:                               absolute;
  top:                                    0;
  height:                                 75px;
  width:                                  100vw;
  padding:                                0 2%;
  display:                                flex;
  justify-content:                        space-between;
  align-items:                            center;
  font-family:                            'Changa', sans-serif;
  z-index:                                1000;
  background-color:                       transparent;

  @media screen and (min-width: 320px){
    padding: 0 5%;
  }

  @media screen and (min-width: 768px){
    height: 100px;
  }

  @media screen and (min-width: 1400px){
    padding: 0 10%;
  }
`;

const Logo = styled.div`
  font-weight:                            600;
  font-size:                              2em;

  & > span {
    font-weight:                          200;
  }

  @media screen and (min-width: 480px){
    font-size:                            2.5em;
  }

  @media screen and (min-width: 768px){
    font-size:                            3em;
  }
`;

const NavbarMenu = styled.ul`
  text-align:                             center;
  list-style-type:                        none;

  & > li {
    display:                              none;
    padding-left:                         20px;
    font-weight:                          600;
  }

  & > i {
    display:                              block; 
  }

  @media screen and (min-width: 1150px){
    & > li {
      display:                            inline-block;
    }

    & > i {
      display:                            none;
    }
  }
`;

class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper>
        <Logo>Proto<span>Page</span></Logo>
        <NavbarMenu>
          <li key="beefPatties">Beef Patties</li>
          <li key="specialSauce">Special Sauce</li>
          <li key="lettuce">Lettuce</li>
          <li key="cheese">Cheese</li>
          <li key="pickles">Pickles</li>
          <li key="onions">Onions</li>
          <i key="listIcon" className="fa fa-bars fa-2x"></i>
        </NavbarMenu>
      </NavbarWrapper>
    );
  }
}

export default Navbar;