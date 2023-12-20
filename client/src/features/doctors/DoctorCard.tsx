/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import type { Doctor } from './type';
import ModalWindow from './ModalWindow';
import DoctorUpdateForm from './DoctorUpdateForm';
import './style.css';
import Example from '../profile/components/myAppointment/DataCalendar';

function CardDoctor({ doctor }: { doctor: Doctor }): JSX.Element {
  const [showDelete, setShowDelete] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [appoint, setAppoint] = useState(false);
  //const checkAdmin = useSelector((store: RootState) => store.auth.user?.isAdmin);
  const checkAdmin = true

  return (
    <div className="card">
      <img className="img" src={doctor.img} alt="img" />
      <p>{doctor.firstName} {doctor.secondName} {doctor.patronymic}</p>
      {!showAll && <button className="main_link_button h-10 w-40"  onClick={() => setShowAll(true)}>Подробнее</button>}
      {showAll && <button className="main_link_button h-10 w-10"  onClick={() => setShowAll(false)}>X</button>}
      {showAll && <p>{doctor.description}</p> }
      {checkAdmin && <button className="main_link_button h-10 w-40"  onClick={() => setShowDelete(true)}>Удалить </button>}
      {showDelete && <ModalWindow setShowDelete={setShowDelete} id={doctor.id} />}
      {checkAdmin && <button className="main_link_button h-10 w-40" onClick={() => setShowUpdate(true)}>Изменить</button>}
      {showUpdate && <DoctorUpdateForm doctor={doctor} setShowUpdate={setShowUpdate} />} 
      <button className="main_link_button h-10 w-40" onClick={() => setAppoint(true)}>Запись </button>
       {appoint && <Example id={doctor.id} />}
    </div>
  );
}

export default CardDoctor;
