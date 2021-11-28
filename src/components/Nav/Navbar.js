import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Burger from './Burger';

const StyledNavbar = styled.div`
  width: 100%;
  height: 55px;
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

    a {
      color: white;
      text-decoration: none;
    }

    span {
      color: #5bc0be;
      text-decoration: underline;
    }
  }
`;

export default function Navbar({ user }) {
  return (
    <StyledNavbar>
      <div className="logo">
        <Link to="/">
          <span>A</span>lbert
        </Link>
      </div>
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
