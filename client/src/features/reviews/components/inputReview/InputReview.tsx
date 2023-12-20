import React, { useEffect, useState } from 'react';
import './inputReview.css';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import type { RootState } from '../../../../store/store';
import type { Doctor } from '../../../doctors/type';

function InputReview(): JSX.Element {
  const doctors = useSelector((store: RootState) => store.Doctor.doctors);
  const [buttonVisible, setButtonVisible] = useState<boolean>(true); // Используем состояние для управления видимостью кнопки
  const [doctorsList, setDoctorsList] = useState<boolean>(false); // Используем состояние для управления видимостью кнопки
  const [containerHeight, setContainerHeight] = useState<string>('300px'); // Используем состояние для управления высотой контейнера
  const [сhoice, setСhoice] = useState<Doctor | undefined>(); // Используем состояние для выбора доктора

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const handleButtonClick = (): void => {
    setButtonVisible(false);
    setContainerHeight('500px');
    setTimeout(() => {
      setDoctorsList(true);
    }, 1000);
  };

  const handleCardClick = (doctor: Doctor): void => {
    setDoctorsList(false); // Скрыть список карточек после выбора
    setContainerHeight('300px'); // Установить высоту контейнера обратно на исходное значение
    setСhoice(doctor);
    setTimeout(() => {
      setButtonVisible(true);
    }, 1000);
  };

  const [reviewsSections, setReviewsSections] = useState<JSX.Element[]>([]);
  const [selectedRadio, setSelectedRadio] = useState<number>(0);
  // Группируем отзывы по три в каждую секцию
  useEffect(() => {
    const sections = Array.from({ length: Math.ceil(doctors.length / 10) }, (_, index) => {
      const start = index * 10;
      const end = start + 10;
      return (
        <div
          className="main_full_container_wrap"
          key={index}
          style={{ display: selectedRadio === index ? 'flex' : 'none' }}
        >
          {doctors.slice(start, end).map((doctor) => (
            <motion.button
              type="button"
              key={doctor.id}
              className="card_container_doctor container_description border_3px_solid_orange"
              style={{
                width: 140,
                height: 160,
                textAlign: 'center',
                padding: '0',
                borderRadius: '12%',
              }}
              whileHover={{ scale: 1.1 }} // Добавить анимацию при наведении
              variants={cardVariants}
              onClick={() => handleCardClick(doctor)}
              initial="hidden"
              animate="visible"
            >
              <img src={doctor.img} alt={doctor.firstName} style={{ width: 140, height: 155 }} />
              <p style={{ lineHeight: '1.2' }}>
                {doctor.firstName} {doctor.secondName}
              </p>
            </motion.button>
          ))}
        </div>
      );
    });
    setReviewsSections(sections);
  }, [doctors, selectedRadio]);

  // Генерируем радиокнопки
  const radioElements = Array.from({ length: Math.ceil(doctors.length / 10) }, (_, index) => (
    <div key={index} className="main_full_container_wrap gap-5">
      <input
        type="radio"
        id={`radioDoctors_inputReview-${index}`}
        name="radioDoctors_inputReview"
        value={index}
        checked={selectedRadio === index}
        onChange={() => setSelectedRadio(index)}
      />
      <label htmlFor={`radioDoctors_inputReview-${index}`} />
    </div>
  ));

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
            <motion.button
              id="btn_6"
              type="button"
              className="custom_btn"
              onClick={handleButtonClick}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              {сhoice === undefined ? (
                <span className="text-6xl">Выбрать специалиста</span>
              ) : (
                <span className="text-6xl">{сhoice.firstName}</span>
              )}
            </motion.button>
          ) : (
            <AnimatePresence>
              {doctorsList && doctors.length && (
                <motion.div
                  className="main_full_container_wrap"
                  style={{ maxHeight: '400', padding: '20px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>{reviewsSections}</div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
      <div className="main_full_container_wrap pt-4">{radioElements}</div>

      <div className="main_full_container_wrap pt-12">
        <div id="container_input_reviews" className="container_description border_3px_solid_orange">
          <input id="input_reviews" className="border_3px_solid_dark_green" />
        </div>
      </div>
    </div>
  );
}

export default InputReview;
