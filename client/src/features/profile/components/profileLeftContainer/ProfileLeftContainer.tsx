import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../../public/img/logo-Rehabilitation-center.png';
import './profileLeftContainer.css';

function ProfileLeftContainer(): JSX.Element {
  return (
    <div className="profile_left_container">
      <img src={logo} alt="logo" className="logo" />

      <Link to="/">
        <div className="profile_left_container_appointment">
          <p>Записаться</p>
        </div>
      </Link>
      <div className="profile_left_container_links">
        <Link to="/">
          <img src="" alt="" />
          <p>Главная</p>
        </Link>
        <Link to="/">
          <img src="" alt="" />
          <p>Мои приемы</p>
        </Link>
        <Link to="/">
          <img src="" alt="" />
          <p>Мои врачи</p>
        </Link>
        <Link to="/">
          <img src="" alt="" />
          <p>Мои анализы</p>
        </Link>
        <Link to="/">
          <img src="" alt="" />
          <p>Помощь</p>
        </Link>
        <Link to="/">
          <img src="" alt="" />
          <p>Выйти</p>
        </Link>
      </div>
    </div>
  );
}

export default ProfileLeftContainer;
