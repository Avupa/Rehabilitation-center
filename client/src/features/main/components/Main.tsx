import React, { useEffect } from 'react';
import './main.css';
import OneContainer from './oneContainer/OneContainer';
import TwoContainer from './twoContainer/TwoContainer';
import ThreeContainer from './threeContainer/ThreeContainer';

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
    <div className="main">
      <OneContainer />
      <TwoContainer />
      <ThreeContainer />
    </div>
  );
}
export default Main;
