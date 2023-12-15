import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../public/img/logo-Rehabilitation-center.png';
import './navbar.css';
// import NavbarAuth from './NavbarAuth';

function Navbar(): JSX.Element {
  return (
    <nav>
      <div className="navbar_background_color">
        <div className="navbar">
            <Link to="/">
          <div className="navbar_logo_and_description">
              <img src={logo} alt="logo" className="logo" />
            <p className="w-45px">
              Реабилитационный центр
              <br />
              доктора Ефимова В.А.
            </p>
          </div>
            </Link>
          <div className="nav_links">
            <Link to="/services">Услуги</Link>
            <Link to="/doctors">Специалисты</Link>
            <Link to="/price">Отзывы</Link>
            <Link to="/price">О клинике</Link>
            <Link to="/price">Цены</Link>
            {/* <Link to="/price">Контакты</Link> */}
            <Link to="/appointment">Запись</Link>
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
