import React, { useState } from 'react';
import type { Doctor } from './type';
import ModalWindow from './ModalWindow';
import DoctorUpdateForm from './DoctorUpdateForm';
import './style.css';

function CardDoctor({ doctor }: { doctor: Doctor }): JSX.Element {
  const [active,setActive]=useState(false)
  const [state, setState]=useState(false)
  const [all, setAll]=useState(false)

  return (
    <>

          <div className ="card">
      <img className='img' src={doctor.img} alt='img'/>
        <p>{doctor.firstName} {doctor.secondName} {doctor.patronymic}</p>
        {all &&(<div className ="card">
          {active && <ModalWindow setActive={setActive} id={doctor.id}/>}
        <p>{doctor.description}</p>

        <button className='delete' type='button' onClick={()=>setActive(true)}>Удалить </button>
        <button className='update' type='button' onClick={()=>setState(true)}>Изменить </button>
        <button className='close' type='button' onClick={()=>setAll(false)}>Закрыть </button>
        {state && <DoctorUpdateForm doctor={doctor} setState={setState}/>}
      </div>)
       }
        <button>Запись </button>
        {!all && <button className='more' type='button' onClick={()=>setAll(true)}>Подробнее </button>}
      </div>

   </>
  )
}

export default CardDoctor;