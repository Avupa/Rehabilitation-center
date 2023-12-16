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
    <div className="main-container">
      <div className="header">
        <p>Услуги реабилитационного центра</p>
      </div>
      <div className="main-full-container">
        {containers.map((container, index) => (
          <div key={index} className="servises-container">
            <div>
              <img src={container[0]} alt="#" />
            </div>
            <div>
              <p>{container[1]}</p>
            </div>
            <Link to="/">
              <div className="main-link-button">
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
