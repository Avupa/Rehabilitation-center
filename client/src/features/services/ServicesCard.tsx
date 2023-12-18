import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Procedure } from './redux/types/type';
import arrow from '../../../public/img/icon/arrow/Arrow-green.png';
import './stile.css';

function ServicesCard({ procedure }: { procedure: Procedure }): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDivClick = (): void => {
    setIsExpanded((prev) => !prev);
  };

  const divStyle = {
    width: isExpanded ? '800px' : '500px',
    transition: 'width 0.5s',
    display: 'flex', // добавляем flex контейнер
    flexDirection: 'row', // изменяем направление flex контейнера
    justifyContent: 'flex-start',
  };

  return (
    <div className="">
      <div
        className="main_full_container container_description border_3px_solid_dark_green flex"
        style={divStyle}
      >
        <div className="servicesCard_sub_container">
          <button
            className="profile_right_container_toggle_button"
            type="button"
            onClick={() => handleDivClick()}
          >
            <p>{procedure.name}</p>
            <img src={arrow} alt="arrow" className={isExpanded ? 'arrow rotated' : 'arrow'} />
          </button>
          <Link to="/appointment">
            <div className="main_link_button">
              <p>Записаться</p>
            </div>
          </Link>
        </div>
        {isExpanded && (
          <div className="description_container">
            <p>{procedure.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesCard;
