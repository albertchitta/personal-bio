import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledUl = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    color: white;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    // width: ${({ open }) => (open ? '300px' : '0')};
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    padding-left: 0;
  }
`;

export default function RightNav({ open, setOpen }) {
  return (
    <StyledUl open={open}>
      <li>
        <Link to="/" onClick={() => setOpen(!open)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setOpen(!open)}>
          About
        </Link>
      </li>
      <li>
        <Link to="/projects" onClick={() => setOpen(!open)}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="/technologies" onClick={() => setOpen(!open)}>
          Technologies
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setOpen(!open)}>
          Contact
        </Link>
      </li>
      <li>Sign In</li>
    </StyledUl>
  );
}

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
