import React from 'react';
import './mainServises.css';
import img1 from '../../../../../../public/img/main/Rectangle1.png';
import img2 from '../../../../../../public/img/main/Rectangle2.png';
import img3 from '../../../../../../public/img/main/Rectangle3.png';

function MainServises(): JSX.Element {
  return (
    <div id="main-full-container-appointment">
      <div className="main-container">
        <div id="one-sub-container">
          <p>
            Квалифицированная помощь при головных болях, защемлении позвонков, проблемах с
            опорно-двигательным аппаратом
          </p>
        </div>
        <div>
          <div id="two-sub-container">
            <p>Наша цель - лечение причины заболевания, а не симптомов</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainServises;
