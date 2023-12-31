/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import type { Doctor } from '../redux/types/type';
import ModalWindow from './ModalWindow';
import DoctorUpdateForm from './DoctorUpdateForm';
import '../style.css';
import Example from '../../appointment/DataCalendar';

function CardDoctor({ doctor }: { doctor: Doctor }): JSX.Element {
  const [showDelete, setShowDelete] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [appoint, setAppoint] = useState(false);
  const checkAdmin = useSelector((store: RootState) => store.auth.user?.isAdmin);

  const handleModalClick = (): void => {
    setShowAll(false); // Устанавливаем значение showAll в false, чтобы скрыть модальное окно
  };

  const handleContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation(); // Предотвращаем всплытие события клика
  };

  return (
    <div className="cardSmall">
      <img className="img" src={doctor.img} alt="img" />
      <p className="docName">{doctor.firstName}</p>
      <p className="docName">{doctor.secondName}</p>
      <p className="docName">{doctor.patronymic}</p>
      {!showDelete ? (
        <>
          {!showAll && (
            <button className="main_link_button h-10 w-40" onClick={() => setShowAll(true)}>
              Подробнее
            </button>
          )}
          {showAll && (
            <button className="main_link_button h-10 w-10" onClick={() => setShowAll(false)}>
              X
            </button>
          )}
          {showAll && (
            <div className="modal_background" onClick={handleModalClick}>
              <div className="modal_absolut" onClick={handleContentClick}>
                {doctor.description}
              </div>
            </div>
          )}

          {checkAdmin && (
            <button className="main_link_button h-10 w-40" onClick={() => setShowDelete(true)}>
              Удалить{' '}
            </button>
          )}
          {checkAdmin && (
            <button className="main_link_button h-10 w-40" onClick={() => setShowUpdate(true)}>
              Изменить
            </button>
          )}
          {showUpdate && (
            <DoctorUpdateForm
              doctor={doctor}
              setShowUpdate={setShowUpdate}
              handleContentClick={handleContentClick}
            />
          )}
          <button className="main_link_button h-10 w-40" onClick={() => setAppoint(true)}>
            Запись{' '}
          </button>
          {appoint && (
            <Example
              key="doctor.id"
              id={doctor.id}
              setAppoint={setAppoint}
              handleContentClick={handleContentClick}
            />
          )}
        </>
      ) : (
        <div>
          <ModalWindow setShowDelete={setShowDelete} id={doctor.id} />
        </div>
      )}
    </div>
  );
}

export default CardDoctor;
