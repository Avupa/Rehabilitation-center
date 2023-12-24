import React from 'react';

import type { Procedure } from './redux/types/type';
import { useAppDispatch } from '../../store/store';
import { deleteProcedures } from './redux/procedureSlice';

function ModalWindow({
  setShowDelete,
  procedure,
  handleContentClick
}: {
  setShowDelete: (status: boolean) => void;
  handleContentClick: (e: React.MouseEvent) => void;
  procedure: Procedure; 
}): JSX.Element {
  const dispatch = useAppDispatch();

  const del = (): void => {
    void dispatch(deleteProcedures(procedure.id));
    setShowDelete(false);
  };

  return (
    <div className="modal_background" onClick={() => setShowDelete(false)}>
      <div className="modal_absolut" onClick={handleContentClick}>
        вы точно хотите удалить этот запрос?
        <button className="" onClick={del}>
          да
        </button>
        <button className="" onClick={() => setShowDelete(false)}>
          нет
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
