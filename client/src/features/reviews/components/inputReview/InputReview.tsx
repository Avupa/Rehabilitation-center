import React, { useEffect, useState } from 'react';
import './inputReview.css';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, type RootState } from '../../../../store/store';
import type { Doctor } from '../../../doctors/type';
import { addReviews } from '../../redux/reviewsSlice';

function InputReview(): JSX.Element {
  const doctors = useSelector((store: RootState) => store.Doctor.doctors);
  const user = useSelector((store: RootState) => store.auth.user);
  const [buttonVisible, setButtonVisible] = useState<boolean>(true); // Используем состояние для управления видимостью кнопки
  const [doctorsList, setDoctorsList] = useState<boolean>(false); // Используем состояние для управления видимостью кнопки
  const [containerHeight, setContainerHeight] = useState<string>('300px'); // Используем состояние для управления высотой контейнера
  const [сhoice, setСhoice] = useState<Doctor | undefined>(); // Используем состояние для выбора доктора
  const [reviewsSections, setReviewsSections] = useState<JSX.Element[]>([]);
  const [selectedRadio, setSelectedRadio] = useState<number>(0);
  const [descriptionInput, setDescriptionInput] = useState<string>();
  const [star, setStar] = useState<number>(0);

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
    }, 500);
  };

  const handleButtonClinicClick = (): void => {
    setDoctorsList(false); // Скрыть список карточек после выбора
    setContainerHeight('300px'); // Установить высоту контейнера обратно на исходное значение
    setСhoice(undefined);
    setTimeout(() => {
      setButtonVisible(true);
    }, 500);
  };

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
  const dispatch = useAppDispatch();
  const formData = new FormData();

  const reviewAdd = (): void => {
    const grad = star;
    const description = descriptionInput;
    const userId = user?.id;
    const doctorId = сhoice;

    formData.append('grad', grad);
    formData.append('description', description);
    formData.append('userId', userId);
    formData.append('doctorId', doctorId);

    try {
      dispatch(addReviews(formData));
    } catch (error) {
      console.error(error);
    }
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
          {!buttonVisible ? ( // Проверка видимости кнопки перед рендерингом
            <AnimatePresence>
              {doctorsList && doctors.length && (
                <div>
                  <motion.button
                    type="button"
                    id="button7"
                    style={{
                      position: 'absolute',
                      left: '30%',
                      top: '-6%',
                      width: 400,
                      height: 60,
                    }}
                    whileHover={{ scale: 1.1 }} // Добавить анимацию при наведении
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={handleButtonClinicClick}
                  >
                    <p>Выбрать: О клинике</p>
                  </motion.button>
                  <motion.div
                    className="main_full_container_wrap"
                    style={{ maxHeight: '400', padding: '20px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>{reviewsSections}</div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          ) : (
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
                <div>
                  <div className="mb-9">
                    <h1 className="text-4xl">Выбрано: О клинике</h1>
                  </div>

                  <p className="text-6xl">Выбрать специалиста</p>
                </div>
              ) : (
                <div className="main_full_container_wrap">
                  <div>
                    <img
                      src={сhoice.img}
                      alt={сhoice.firstName}
                      style={{ width: 180, height: 220 }}
                    />
                  </div>
                  <div>
                    <div className="mb-9">
                      <h1 className="text-4xl">
                        {сhoice.firstName} {сhoice.secondName}
                      </h1>
                    </div>
                    <div className="w-96">
                      <p className="text-5xl">Выбрать другого специалиста</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.button>
          )}
        </div>
      </div>
      <AnimatePresence>
        {!buttonVisible && (
          <motion.div
            className="main_full_container_wrap pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {radioElements}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="main_full_container_wrap pt-12">
        <div
          id="container_textarea_reviews"
          className="container_description border_3px_solid_orange container_flex gap-5"
        >
          <textarea
            id="textarea_reviews"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
          <button
            type="submit"
            id="button7"
            style={{
              width: 150,
              height: 60,
            }}
            onClick={() => reviewAdd}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputReview;
