import React, { useState } from 'react';
import penIcon from '../../../../../public/img/icon/pen-icon.png';
import arrow from '../../../../../public/img/icon/arrow/Arrow-white.png';
import './toggle.css';

function TogglePersoneData(): JSX.Element {
  const [toggle, setToggle] = useState<boolean>(false);

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
            <p>xxx@mail.ru</p>
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
