import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../../../store/store';
import { useSelector } from 'react-redux';
import './profile.css';
import { Link } from 'react-router-dom';
import TogglePersoneData from '../personalData/Toggle';

import { initUserApps } from '../../../auth/authSlice';

function Profile(): JSX.Element {
  const dispatch = useAppDispatch();
  const user=useSelector((store:RootState)=>store.auth.user)

  useEffect(() => {
    if(user){void dispatch(initUserApps(user.id))}
  }, [dispatch, user]);

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
