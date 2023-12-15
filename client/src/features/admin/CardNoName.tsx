import React, { useState } from 'react';
import type { NoNameUser } from '../noNameUser/type';
import ModalWindow from './ModalWindow';

function CardNoName({ noNameUser }: { noNameUser: NoNameUser }): JSX.Element {
  const [active, setActive] = useState(false);

  return (
    <>
  {active && <ModalWindow setActive={setActive} id={noNameUser.id} />}
      <div className="card">
        <p>{noNameUser.name}</p>
        <p>{noNameUser.telephone}</p>
        <p>{noNameUser.description}</p>

        <button>Запись </button>
        <button className="delete" type="button" onClick={() => setActive(true)}>
          Удалить{' '}
        </button>
      </div>
    </>
  );
}

export default CardNoName;
