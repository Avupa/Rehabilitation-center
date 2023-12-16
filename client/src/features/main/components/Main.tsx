import React, { useEffect } from 'react';
import './main.css';
import OneContainer from './oneContainer/OneContainer';
import TwoContainer from './twoContainer/TwoContainer';

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
      <OneContainer />
      <TwoContainer />
    </div>
  );
}
export default Main;
