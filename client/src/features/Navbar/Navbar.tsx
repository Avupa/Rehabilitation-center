import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/img/logo-Rehabilitation-center.png';
import './navbar.css';

function Navbar(): JSX.Element {
  return (
    <nav className="navbar-background-color">
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
