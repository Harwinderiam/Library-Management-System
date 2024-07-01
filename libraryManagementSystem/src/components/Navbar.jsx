import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/Wrappers/Navbar.js';

const Navbar = () => {
    return (
      <Wrapper.NavbarContainer>
        <Wrapper.NavbarBrand>
          <Link to="/">Library</Link>
        </Wrapper.NavbarBrand>
        <Wrapper.NavbarLinks>
          <Wrapper.NavbarLink>
            <Link to="/">Home</Link>
          </Wrapper.NavbarLink>
          <Wrapper.NavbarLink>
            <Link to="/login">User</Link>
          </Wrapper.NavbarLink>
          <Wrapper.NavbarLink>
            <Link to="/register">Admin</Link>
          </Wrapper.NavbarLink>
        </Wrapper.NavbarLinks>
      </Wrapper.NavbarContainer>
    );
  };

export default Navbar;
