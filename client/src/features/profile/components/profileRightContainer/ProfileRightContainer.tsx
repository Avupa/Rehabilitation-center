import React from 'react';
import { Link } from 'react-router-dom';
import './profileRightContainer.css';
import iconProfile from '../../../../../public/img/profile-icon.png';
import TogglePersoneData from '../personalData/Toggle';

function ProfileRightContainer(): JSX.Element {
  return (
    <div className="profile_right_container">
      <div className="user_info">
        <p>Имя фамилия</p>
        <img src={iconProfile} alt="User Avatar" className="logo" />
      </div>
      <TogglePersoneData />
      <div>
        <p>ПРЕДСТОЯЩИЕ ПРИЕМЫ</p>
        <Link to="/appointment">
          <div className="main-link-button">
            <p>Записаться</p>
          </div>
        </Link>
      </div>
      <div>
        <p>ПОСЛЕДНИЕ АНАЛИЗЫ</p>
        <Link to="/">
          <div className="main-link-button">
            <p>Все анализы</p>
          </div>
        </Link>
      </div>
      <div>
        <p>МОИ ВРАЧИ</p>
      </div>
    </div>
  );
}

export default ProfileRightContainer;
