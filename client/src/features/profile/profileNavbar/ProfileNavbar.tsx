import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../../../public/img/icon/logo-Rehabilitation-center.png';
import iconProfile from '../../../../public/img/icon/profile-icon.png';
import './profileNavbar.css';
import { RootState, useAppDispatch } from '../../../store/store';
import { logout } from '../../auth/authSlice';
import * as api from '../../auth/api'


function ProfileNavbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user=useSelector((store:RootState)=>store.auth.user)

  const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    api.logoutFetch();
    void dispatch(logout());
    navigate('/');
  };

  return (
    <div className="profile_full_container">
      <div className="profile_left_container">
        <Link to = '/'><img src={logo} alt="logo" className="logo" /></Link>

        <Link to="/appointment">
          <div className="main_link_button w-44 h-16">
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
          <Link to="/help">
            <img src="" alt="" />
            <p>Помощь</p>
          </Link>
          <Link to="/" onClick={handleLogout}>
            <img src="" alt="" />
            <p>Выйти</p>
          </Link>
        </div>
      </div>
      <div className="profile_right_container">
        <div className="user_info">
          <p>{`${user?.firstName} ${user?.patronymic} ${user?.secondName}`}</p>
          <img src={iconProfile} alt="User Avatar" className="logo" />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileNavbar;
