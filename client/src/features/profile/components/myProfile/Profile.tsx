import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../store/store';
import { useAppDispatch } from '../../../../store/store';
import './profile.css';
import { Link, useNavigate } from 'react-router-dom';
import TogglePersoneData from '../personalData/Toggle';

import { initUserApps } from '../../../auth/authSlice';

function Profile(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      void dispatch(initUserApps(user.id));
    } else {
      navigate('/auth/sign-in')
    }
  }, [dispatch]);

  return (
    <div>
      <TogglePersoneData />
      <div>
        <p>ПРЕДСТОЯЩИЕ ПРИЕМЫ</p>
        <Link to="/appointment">
          <div className="main_link_button">
            <p>Записаться</p>
          </div>
        </Link>
      </div>
      <div>
        <p>ПОСЛЕДНИЕ АНАЛИЗЫ</p>
        <Link to="/">
          <div className="main_link_button">
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
