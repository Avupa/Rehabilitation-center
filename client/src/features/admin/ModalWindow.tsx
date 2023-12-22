import React from 'react';

import type { IdNoNameUser } from '../noNameUser/type';
import { useAppDispatch } from '../../store/store';
import { deleteNoNameUsers } from '../noNameUser/noNameUserSlice';
import './style.css';

function ModalWindow({
  setActive,
  id,
}: {
  setActive: (status: boolean) => void;
  id: IdNoNameUser;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const del = (): void => {
    dispatch(deleteNoNameUsers(id));
    setActive(false);
  };

  return (
    <div className="modal active">
      <div className="modal_content">
        Вы точно хотите удалить эту заявку?
        <button type="button" className="modalBTN btnYes" onClick={del}>
          да
        </button>
        <button type="button" className="modalBTN btnNo" onClick={() => setActive(false)}>
          нет
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
