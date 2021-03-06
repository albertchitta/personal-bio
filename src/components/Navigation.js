import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCogs,
  FaEnvelope,
} from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';

export default function Navigation() {
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
    <ProSidebar>
      <SidebarHeader>
        <h1>
          <span className="first-word">A</span>lbert
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <Menu>
          <MenuItem
            icon={<FaHome size="24px" color="white" />}
            className={
              activeMenu === 1 ? 'pro-menu-item-active' : 'pro-menu-item'
            }
            onClick={() => setActiveMenu(1)}
          >
            <NavLink exact to="/">
              Home
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<FaUser size="24px" color="white" />}
            className={
              activeMenu === 2 ? 'pro-menu-item-active' : 'pro-menu-item'
            }
            onClick={() => setActiveMenu(2)}
          >
            <NavLink exact to="/about">
              About
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<FaBriefcase size="24px" color="white" />}
            className={
              activeMenu === 3 ? 'pro-menu-item-active' : 'pro-menu-item'
            }
            onClick={() => setActiveMenu(3)}
          >
            <NavLink exact to="/projects">
              Projects
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<FaCogs size="24px" color="white" />}
            className={
              activeMenu === 4 ? 'pro-menu-item-active' : 'pro-menu-item'
            }
            onClick={() => setActiveMenu(4)}
          >
            <NavLink exact to="/technologies">
              Technologies
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<FaEnvelope size="24px" color="white" />}
            className={
              activeMenu === 5 ? 'pro-menu-item-active' : 'pro-menu-item'
            }
            onClick={() => setActiveMenu(5)}
          >
            <NavLink exact to="/contact">
              Contact
            </NavLink>
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <h6>
          <Link to="/signin">Admin Sign In</Link>
        </h6>
      </SidebarFooter>
    </ProSidebar>
  );
}
