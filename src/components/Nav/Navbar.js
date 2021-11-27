import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Burger from './Burger';

const StyledNavbar = styled.div`
  width: 100%;
  height: 55px;
  // border-bottom: 2px solid #283618;
  padding: 0 20px;
  color: #f4f4f9;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  position: fixed;
  background-color: #000000;
  z-index: 20;

  .logo {
    padding: 15px 0;
    font-size: 24px;
  }
`;

export default function Navbar({ user }) {
  return (
    <StyledNavbar>
      <div className="logo">Albert</div>
      <Burger user={user} />
    </StyledNavbar>
  );
}

Navbar.propTypes = {
  user: PropTypes.node,
};

Navbar.defaultProps = {
  user: null,
};
