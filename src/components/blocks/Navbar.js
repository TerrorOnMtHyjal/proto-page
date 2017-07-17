import React, { Component } from 'react';
import styled from "styled-components";

class Navbar extends Component {
  render() {

    const NavbarWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    `;

    const Logo = styled.div`
      font-family: 'Changa', sans-serif;
      font-weight: 600;
      font-size: 3em;

      & > span {
        font-family: 'Changa', sans-serif;
        font-weight: 200;
      }
    `;

    const NavbarMenu = styled.ul`
      text-align: center;
      list-style-type: none;

      & > li {
        font-family: 'Changa', sans-serif;
        font-weight: 600;
        display: inline-block;
        padding-left: 20px;
      }
    `;


    return (
      <NavbarWrapper>
        <Logo>Proto<span>Page</span></Logo>
        {/*<NavbarMenu>
          <li>Beef Patties</li>
          <li>Special Sauce</li>
          <li>Lettuce</li>
          <li>Cheese</li>
          <li>Pickles</li>
          <li>Onions</li>
        </NavbarMenu>*/}
      </NavbarWrapper>
    );
  }
}

export default Navbar;