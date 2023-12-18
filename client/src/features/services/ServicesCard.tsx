import type { CSSProperties } from 'react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Procedure } from './redux/types/type';
import arrow from '../../../public/img/icon/arrow/Arrow-green.png';
import './stile.css';

function ServicesCard({ procedure }: { procedure: Procedure }): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleDivClick = (): void => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    let timer: number;
    if (isExpanded) {
      timer = setTimeout(() => {
        setShowDescription(true);
      }, 600);
    } else {
      setShowDescription(false); // Скрыть описание при сокрытии элемента
    }
    return () => clearTimeout(timer);
  }, [isExpanded]);

  const divStyle: CSSProperties = {
    width: isExpanded ? '1000px' : '550px',
    transition: 'width 0.5s',
    display: 'flex', // добавляем flex контейнер
    flexDirection: 'row', // изменяем направление flex контейнера
    justifyContent: 'flex-start',
    padding: '20px',
    marginTop: '20px',
  };

  const descriptionStyle: CSSProperties = {
    width: '450px', // Устанавливаем фиксированную ширину для контейнера с описанием
  };

  const subContainerStyle: CSSProperties = {
    display: 'flex', // добавляем flex контейнер
    justifyContent: 'center', // центрируем содержимое по горизонтали
    alignItems: 'center', // центрируем содержимое по вертикали
  };

  return (
    <div
      className="container_description border_3px_solid_dark_green h-48 gap-10 container_flex"
      style={divStyle}
    >
      <div className="servicesCard_sub_container">
        <div style={subContainerStyle}>
          <button className="container_flex" type="button" onClick={() => handleDivClick()}>
            <p>{procedure.name}</p>
            <img src={arrow} alt="arrow" className={isExpanded ? 'arrow left' : 'arrow right'} />
          </button>
        </div>
        <div>
          <Link to="/appointment">
            <div className="main_link_button w-44 h-14">
              <p>Записаться</p>
            </div>
          </Link>
        </div>
      </div>
      {showDescription && (
        <div className="main_full_container_wrap" style={descriptionStyle}>
          <p>{procedure.description}</p>
        </div>
      )}
    </div>
  );
}

export default ServicesCard;
