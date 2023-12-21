import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import penIcon from '../../../../../public/img/icon/pen-icon.png';
import arrow from '../../../../../public/img/icon/arrow/Arrow-green.png';
import './toggle.css';
import type { RootState } from '../../../../store/store';

function TogglePersoneData(): JSX.Element {
  const [toggle, setToggle] = useState<boolean>(false);
  const user=useSelector((store:RootState)=>store.auth.user)
  
  const handleAvatarClick = (): void => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="profile_right_container_toggle">
      <button
        className="profile_right_container_toggle_button"
        type="button"
        onClick={() => handleAvatarClick()}
      >
        <p>Личные данные:</p>
        <img src={arrow} alt="arrow" className={toggle ? 'arrow rotated' : 'arrow'} />
      </button>
      {toggle && (
        <div className="profile_right_container_list">
          <div>
            <p>Email:</p>
            <p>{user?.email}</p>
            <img src={penIcon} alt="pen-icon" />
          </div>
          <div>
            <p>Номер телефона:</p>
            <p>8(ххх)ххх-хх-хх</p>
            <img src={penIcon} alt="pen-icon" />
          </div>
          <div>
            <p>Пароль:</p>
            <p>*******</p>
            <button type="submit">
              <img src={penIcon} alt="pen-icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TogglePersoneData;
