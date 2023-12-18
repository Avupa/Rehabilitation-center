import React from 'react';
import './mainServises.css';
import { Link } from 'react-router-dom';
import img1 from '../../../../../../public/img/main/Rectangle1.png';
import img2 from '../../../../../../public/img/main/Rectangle2.png';
import img3 from '../../../../../../public/img/main/Rectangle3.png';

function MainServises(): JSX.Element {
  const containers = [
    [img1, 'Лечебный фитнес', 'Подробнее'],
    [img2, 'Остео-лечение', 'Подробнее'],
    [img3, 'Массаж', 'Подробнее'],
  ];

  return (
    <div className="main_container">
      <div className="header">
        <p>Услуги реабилитационного центра</p>
      </div>
      <div className="main_full_container_wrap">
        {containers.map((container, index) => (
          <div key={index} className="servises_container">
            <div>
              <img src={container[0]} alt="#" />
            </div>
            <div>
              <p>{container[1]}</p>
            </div>
            <Link to="/services">
              <div className="main_link-button w-44 h-14">
                <p>{container[2]}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MainServises;
