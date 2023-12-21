import React from 'react';

import type { IdDoctor } from '../redux/types/type';
import { useAppDispatch } from '../../../store/store';
import { deleteDoctors } from '../redux/doctorSlice';
import '../style.css';

function ModalWindow({
  setShowDelete,
  id,
}: {
  setShowDelete: (status: boolean) => void;
  id: IdDoctor;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const del = (): void => {
    void dispatch(deleteDoctors(id));
    setShowDelete(false);
  };

  return (
    <div>
      <p>Удалить специалиста?</p>
      <div className="container_flex">
        <button
          type="button"
          style={{
            width: '70px',
            height: '40px',
            backgroundColor: 'red',
            marginRight: '10px',
            borderRadius: '5px',
          }}
          onClick={del}
        >
          да
        </button>
        <button
          type="button"
          style={{ width: '70px', height: '40px', backgroundColor: 'green', borderRadius: '5px' }}
          onClick={() => setShowDelete(false)}
        >
          нет
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
