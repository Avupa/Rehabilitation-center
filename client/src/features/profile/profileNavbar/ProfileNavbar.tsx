import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../../public/img/logo-Rehabilitation-center.png';
import iconProfile from '../../../../public/img/profile-icon.png';
import './profileNavbar.css';

function ProfileNavbar(): JSX.Element {
  return (
    <div className="profile_full_container">
      <div className="profile_left_container">
        <img src={logo} alt="logo" className="logo" />

        <Link to="/appointment">
          <div className="profile_left_container_appointment">
            <p>Записаться</p>
          </div>
        </Link>
        <div className="profile_left_container_links">
          <Link to="/profile">
            <img src="" alt="" />
            <p>Главная</p>
          </Link>
          <Link to="/profile/my/appointment">
            <img src="" alt="" />
            <p>Мои приемы</p>
          </Link>
          <Link to="/profile/my/doctors">
            <img src="" alt="" />
            <p>Мои врачи</p>
          </Link>
          <Link to="/help">
            <img src="" alt="" />
            <p>Помощь</p>
          </Link>
          <Link to="/">
            <img src="" alt="" />
            <p>Выйти</p>
          </Link>
        </div>
      </div>
      <div className="profile_right_container">
        <div className="user_info">
          <p>Имя фамилия</p>
          <img src={iconProfile} alt="User Avatar" className="logo" />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileNavbar;
