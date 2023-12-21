/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import type { NoNameUser } from '../noNameUser/type';
import ModalWindow from './ModalWindow';
import './style.css'

function CardNoName({ noNameUser }: { noNameUser: NoNameUser }): JSX.Element {
  const [active, setActive] = useState(false);

  return (
    <>
  {active && <ModalWindow setActive={setActive} id={noNameUser.id} />}
      <div className="cardNN">
        <div>Имя: {noNameUser.name}</div>
        <div>{noNameUser.telephone}</div>
        <div className='descNN'>Описание: {noNameUser.description}</div>
        <button className='main_link_button h-10 w-40' onClick={() => setActive(true)}>Запись </button>
        <button className='main_link_button h-10 w-40' onClick={() => setActive(true)}>
          Удалить{' '}
        </button>
      </div>
    </>
  );
}

export default CardNoName;
