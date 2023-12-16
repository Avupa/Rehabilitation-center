import React, { useEffect } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import imgDoctor from '../../../public/img/Rectangle.png';

function Main(): JSX.Element {
  useEffect(() => {
    // Сохраняем ссылку на функцию очистки
    const { body } = document;
    body.style.backgroundColor = '#e7e7e7';

    // Функция для восстановления изначального цвета при удалении компонента
    return () => {
      body.style.backgroundColor = ''; // Или другой изначальный цвет
    };
  }, []);

  return (
    <div id="main">
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
          <div>
            <Link to="/appointment">
              <div id="three-sub-container">
                <p>Онлайн запись</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="main-container">
          <img src={imgDoctor} alt="imgDoctor" className="w-96" />
        </div>
      </div>
    </div>
  );
}
export default Main;
