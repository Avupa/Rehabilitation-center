import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import TogglePersoneData from '../personalData/Toggle';

function Profile(): JSX.Element {
  return (
    <div>
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

export default Profile;
