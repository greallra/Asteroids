import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.div`
    display: flex;
    background: radial-gradient(circle at bottom,navy 0,#000 100%);
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const H2 = styled.h2`
    color: #ffdd57;
`

function NavBar() {
  return (
    <Nav>
        <H2>Asteroids</H2>
    </Nav>
  );
}

export default NavBar;
