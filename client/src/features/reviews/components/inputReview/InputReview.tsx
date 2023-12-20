import React, { useState } from 'react';
import './inputReview.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../store/store';
import type { Doctor } from '../../../doctors/type';

function InputReview(): JSX.Element {
  const doctors = useSelector((store: RootState) => store.Doctor.doctors);
  const [buttonVisible, setButtonVisible] = useState(true); // Используем состояние для управления видимостью кнопки
  const [doctorsList, setDoctorsList] = useState(false); // Используем состояние для управления видимостью кнопки
  const [containerHeight, setContainerHeight] = useState('300px'); // Используем состояние для управления высотой контейнера

  const handleButtonClick = (): void => {
    setButtonVisible(false);
    setContainerHeight('500px');
    setTimeout(() => {
      setDoctorsList(true);
    }, 1200); // Устанавливаем задержку в 1 секунду перед изменением высоты контейнера
  };

  return (
    <div>
      <div className="header">
        <p>Здесь вы можете поделиться своим комментарием</p>
      </div>
      <div className="main_full_container_wrap" style={{ padding: '10', margin: '10' }}>
        <div
          id="container_list_doctors"
          className="main_full_container_wrap"
          style={{ height: containerHeight }}
        >
          {buttonVisible ? ( // Проверка видимости кнопки перед рендерингом
            <button id="btn_6" type="button" className="custom_btn" onClick={handleButtonClick}>
              <span className="text-6xl">Выбрать специалиста</span>
            </button>
          ) : (
            doctorsList &&
            doctors.length && (
              <div
                className="main_full_container_wrap"
                style={{ overflowY: 'auto', maxHeight: '400px', padding: '20px' }}
              >
                {doctors.map((doctor: Doctor) => (
                  <div
                    key={doctor.id}
                    className="card_container_doctor container_description border_3px_solid_orange"
                    style={{
                      width: 140,
                      height: 160,
                      textAlign: 'center',
                      padding: '0',
                      borderRadius: '12%',
                    }}
                  >
                    <img
                      src={doctor.img}
                      alt={doctor.firstName}
                      style={{ width: 140, height: 155 }}
                    />
                    <p style={{ lineHeight: '1.2' }}>
                      {doctor.firstName} {doctor.secondName}
                    </p>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
      <div className="main_full_container_wrap pt-12">
        <div id="container_input_reviews" className="container_description border_3px_solid_orange">
          <input id="input_reviews" className="border_3px_solid_dark_green" />
        </div>
      </div>
    </div>
  );
}

export default InputReview;
