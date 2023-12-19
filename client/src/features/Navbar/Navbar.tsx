import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../../public/img/icon/logo-Rehabilitation-center.png';
import './navbar.css';
import type { RootState } from '../../store/store';
// import NavbarAuth from './NavbarAuth';

function Navbar(): JSX.Element {
  const checkAdmin = useSelector((store: RootState) => store.auth.user?.isAdmin);

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
            <Link to="/procedure">Услуги</Link>
            <Link to="/doctors">Специалисты</Link>
            <Link to="/price">Отзывы</Link>
            <Link to="/price">О клинике</Link>
            <Link to="/price">Цены</Link>
            <Link to="/appointment">Запись</Link>

            {checkAdmin && !!checkAdmin ? (
              <Link to="/admin">Кабинет администратора</Link>
            ) : (
              <Link to="/check">Личный кабинет</Link>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default Navbar;
