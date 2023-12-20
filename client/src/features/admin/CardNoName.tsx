/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import type { NoNameUser } from '../noNameUser/type';
import ModalWindow from './ModalWindow';

function CardNoName({ noNameUser }: { noNameUser: NoNameUser }): JSX.Element {
  const [active, setActive] = useState(false);

  return (
    <>
  {active && <ModalWindow setActive={setActive} id={noNameUser.id} />}
      <div className="cardSmall">
        <div>{noNameUser.name}</div>
        <div>{noNameUser.telephone}</div>
        <div>{noNameUser.description}</div>

        <button className='main_link_button h-10 w-40'>Запись </button>
        <button className="delete" type="button" onClick={() => setActive(true)}>
          Удалить{' '}
        </button>
      </div>
    </>
  );
}

export default CardNoName;
