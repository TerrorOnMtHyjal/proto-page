import React, { Component }                   from 'react';
import styled                                 from "styled-components";

class Navbar extends Component {
  render() {

    const NavbarWrapper = styled.div`
      display:                                flex;
      justify-content:                        space-between;
      align-items:                            center;
      margin:                                 0 15%;
      width:                                  70%;

      @media screen and (max-width: 767px){
        width:                                100%;
        margin:                               0 2%;
      }
    `;

    const Logo = styled.div`
      font-family:                            'Changa', sans-serif;
      font-weight:                            600;
      font-size:                              3em;

      & > span {
        font-family:                          'Changa', sans-serif;
        font-weight:                          200;
      }

      @media screen and (max-width: 767px){
        font-size:                            2em;
      }
    `;

    const NavbarMenu = styled.ul`
      text-align:                             center;
      list-style-type:                        none;

      & > li {
        font-family:                          'Changa', sans-serif;
        font-weight:                          600;
        display:                              inline-block;
        padding-left:                         20px;
      }

      & > i {
        display:                              none; 
      }

      @media screen and (max-width: 1150px){
        & > li {
          display:                            none;
        }

        & > i {
          display:                            block;
        }
      }
    `;


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