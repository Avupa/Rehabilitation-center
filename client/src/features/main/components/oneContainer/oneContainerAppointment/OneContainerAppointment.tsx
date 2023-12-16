import React from 'react';
import './oneContainerAppointment.css';
import { Link } from 'react-router-dom';
import imgDoctor from '../../../../../../public/img/main/Rectangle.png';

function OneContainerAppointment(): JSX.Element {
  return (
    <div className="main-full-container">
      <div className="main-container">
        <div id="one-sub-container" className="main-container-appointment">
          <p>
            Квалифицированная помощь при головных болях, защемлении позвонков, проблемах с
            опорно-двигательным аппаратом
          </p>
        </div>
        <div className="main-container-appointment">
          <div>
            <div id="two-sub-container" className="main-container-appointment">
              <p>Наша цель - лечение причины заболевания, а не симптомов</p>
            </div>
            <div>
              <Link to="/appointment">
                <div className="main-link-button">
                  <p>Онлайн запись</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container">
        <img src={imgDoctor} alt="imgDoctor" className="w-96" />
      </div>
    </div>
  );
}
export default OneContainerAppointment;
