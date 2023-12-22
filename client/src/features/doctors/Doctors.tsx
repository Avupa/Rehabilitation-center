import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import CardDoctor from './components/DoctorCard';
import './style.css';

function Doctors(): JSX.Element {
  const doctors = useSelector((store: RootState) => store.Doctor.doctors);

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
      <div className="header">
        <p>Все специалисты нашей клиники</p>
      </div>
      <div className="main_full_container_wrap">
        {doctors.map((doctor) => (
          <CardDoctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
