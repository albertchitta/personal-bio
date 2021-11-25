import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const StyledNavbar = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid white;
  padding: 0 20px;
  color: white;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="logo">Albert</div>
      <Burger />
    </StyledNavbar>
  );
}
