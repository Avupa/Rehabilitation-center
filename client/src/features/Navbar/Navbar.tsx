import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../public/img/logo-Rehabilitation-center.png';
import './navbar.css';
// import NavbarAuth from './NavbarAuth';

function Navbar(): JSX.Element {
  return (
    <nav>
      <div className="navbar-background-color">
        <div className="navbar">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <div className="nav-links">
            <Link to="/price">Наши цены</Link>
            <Link to="/appointment">Запись</Link>
            <Link to="/doctors">Врачи</Link>
            <Link to="/services">Услуги</Link>
            <Link to="/profile">Личный кабинет</Link>
            {/* <NavbarAuth /> */}
          </div>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default Navbar;
