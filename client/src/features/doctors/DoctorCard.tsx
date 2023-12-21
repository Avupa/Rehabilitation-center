/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type { Doctor } from './type';
import ModalWindow from './ModalWindow';
import DoctorUpdateForm from './DoctorUpdateForm';
import './style.css';
import Example from '../appointment/DataCalendar';



function CardDoctor({ doctor }: { doctor: Doctor }): JSX.Element {
  const [showDelete, setShowDelete] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [appoint, setAppoint] = useState(false);
  const checkAdmin = useSelector((store: RootState) => store.auth.user?.isAdmin);


  return (
    <div className="cardSmall">
      <img className="img" src={doctor.img} alt="img" />
      <div>
        {doctor.firstName} {doctor.secondName} {doctor.patronymic}
      </div>
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
      {showAll && <div>{doctor.description}</div>}
      {checkAdmin && (
        <button className="main_link_button h-10 w-40" onClick={() => setShowDelete(true)}>
          Удалить{' '}
        </button>
      )}
      {showDelete && <ModalWindow setShowDelete={setShowDelete} id={doctor.id} />}
      {checkAdmin && (
        <button className="main_link_button h-10 w-40" onClick={() => setShowUpdate(true)}>
          Изменить
        </button>
      )}
      {showUpdate && <DoctorUpdateForm doctor={doctor} setShowUpdate={setShowUpdate} />}
      <button className="main_link_button h-10 w-40" onClick={() => setAppoint(true)}>
        Запись{' '}
      </button>
      {appoint && <Example id={doctor.id} />}
    </div>
  );
}

export default CardDoctor;
