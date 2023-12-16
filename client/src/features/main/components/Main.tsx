import React, { useEffect } from 'react';
import './main.css';
import OneContainerAppointment from './oneContainerAppointment/OneContainerAppointment';
import TwoContainerGrade from './twoContainerGrade/twoContainerGrade';

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
      <OneContainerAppointment />
      <TwoContainerGrade />
    </div>
  );
}
export default Main;
