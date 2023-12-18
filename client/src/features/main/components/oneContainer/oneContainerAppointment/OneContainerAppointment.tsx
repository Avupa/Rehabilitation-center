import React from 'react';
import './oneContainerAppointment.css';
import { Link } from 'react-router-dom';
import imgDoctor from '../../../../../../public/img/main/Rectangle-doctor-1.png';

function OneContainerAppointment(): JSX.Element {
  return (
    <div className="main_full_container">
      <div className="main_container">
        <div id="one_sub_container" className="main_container_appointment">
          <p>
            Квалифицированная помощь при головных болях, защемлении позвонков, проблемах с
            опорно-двигательным аппаратом
          </p>
        </div>
        <div className="main_container_appointment">
          <div>
            <div id="two_sub_container" className="main_container_appointment">
              <p>Наша цель - лечение причины заболевания, а не симптомов</p>
            </div>
            <div>
              <Link to="/appointment">
                <div className="main_link_button">
                  <p>Онлайн запись</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main_container">
        <img src={imgDoctor} alt="imgDoctor" className="w-96" />
      </div>
    </div>
  );
}
export default OneContainerAppointment;
