/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { signInUser } from '../../api/auth';

const StyledUl = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 20;

  li {
    padding: 18px 15px;
    color: #f4f4f9;
    font-weight: 500;

    a {
      color: #f4f4f9;
      text-decoration: none;
    }
    a:hover {
      color: #5bc0be;
    }
  }

  .sign-in:hover {
    color: #5bc0be;
    cursor: pointer;
  }

  .item-active {
    font-size: 18px;
    font-weight: 800;
    color: #5bc0be;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000000;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: ${({ open }) => (open ? '300px' : '0')};
    // width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    padding-left: 0;
    box-shadow: 0px 0px 10px 1px #888888;

    li {
      cursor: pointer;
    }

    li:hover {
      background-color: #f4f4f9;
      border-radius: 8px;
      margin-right: 10px;
      margin-left: 10px;
      transition: all 0.2s linear;

      a {
        color: #2f4550;
      }
    }

    .sign-in:hover {
      color: #2f4550;
    }

    .item {
      padding-right: 200px;
      padding-top: 18px;
      padding-bottom: 18px;
    }

    .item-active {
      font-size: 24px;
      font-weight: 800;
      color: #5bc0be;
    }

    .line {
      border: 1px solid #586f7c;
      width: 280px;
      margin-left: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;

export default function RightNav({ open, setOpen, user }) {
  const storedValueAsNumber = Number(sessionStorage.getItem('activeMenu') || 1);
  const [activeMenu, setActiveMenu] = useState(
    Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0,
  );

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      sessionStorage.setItem('activeMenu', String(activeMenu));
    }
    return () => {
      isMounted = false;
    };
  }, [activeMenu]);

  return (
    <StyledUl open={open}>
      <li className="home">
        <Link
          className={activeMenu === 1 ? 'item-active' : 'item'}
          to="/"
          onClick={() => {
            setOpen(!open);
            setActiveMenu(1);
          }}
        >
          HOME
        </Link>
      </li>
      <div className="line" />
      <li>
        <Link
          className={activeMenu === 2 ? 'item-active' : 'item'}
          to="/about"
          onClick={() => {
            setOpen(!open);
            setActiveMenu(2);
          }}
        >
          ABOUT
        </Link>
      </li>
      <div className="line" />
      <li>
        <Link
          className={activeMenu === 3 ? 'item-active' : 'item'}
          to="/projects"
          onClick={() => {
            setOpen(!open);
            setActiveMenu(3);
          }}
        >
          PROJECTS
        </Link>
      </li>
      <div className="line" />
      <li>
        <Link
          className={activeMenu === 4 ? 'item-active' : 'item'}
          to="/technologies"
          onClick={() => {
            setOpen(!open);
            setActiveMenu(4);
          }}
        >
          TECHNOLOGIES
        </Link>
      </li>
      <div className="line" />
      <li>
        <Link
          className={activeMenu === 5 ? 'item-active' : 'item'}
          to="/contact"
          onClick={() => {
            setOpen(!open);
            setActiveMenu(5);
          }}
        >
          CONTACT
        </Link>
      </li>
      <div className="line" />
      <>
        {user === null ? (
          <div className="text-center">
            <Spinner
              style={{ width: '10rem', height: '10rem' }}
              color="warning"
            />
          </div>
        ) : (
          <li className="sign-in" onClick={signInUser}>
            SIGN IN
          </li>
        )}
      </>
    </StyledUl>
  );
}

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  user: PropTypes.node,
};

RightNav.defaultProps = {
  user: null,
};
