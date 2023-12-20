import React from 'react';

import type { IdDoctor } from './type';
import { useAppDispatch } from '../../store/store';
import { deleteDoctors } from './doctorSlice';
import './style.css';

function ModalWindow({
  setShowDelete,
  id,
}: {
  setShowDelete: (status: boolean) => void;
  id: IdDoctor;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const del = (): void => {
    dispatch(deleteDoctors(id));
    setShowDelete(false);
  };

  return (
    <div className="modal_content">
      вы точно хотите удалить этого специалиста?
      <button type="button" onClick={del}>
        да
      </button>
      <button type="button" onClick={() => setShowDelete(false)}>
        нет
      </button>
    </div>
  );
}

export default ModalWindow;
