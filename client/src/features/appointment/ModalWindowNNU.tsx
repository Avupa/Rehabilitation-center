import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';
import { IdDoctor } from '../doctors/type';
import { TimeSlot } from './DateType';
import { makeAppoint } from './DateSlice';

function ModalWindow({
  slot,
  id,
  date,
  setActiveNNU,
  setStatus,
}: {
  setActiveNNU: (activeNNU: boolean) => void;
  setStatus: (status: boolean) => void;
  slot: TimeSlot;
  id: IdDoctor;
  date: string;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const nnu = useSelector((store: RootState) => store.appoint.nnu);
  const [adminComment, setAdminComment] = useState<string | undefined>(undefined);

  console.log(slot);

  const makeAppAdmin = (): void => {
    dispatch(makeAppoint({ id, date, slot, adminComment }));
    setActiveNNU((prev:boolean) => !prev);
    setStatus((prev:boolean) => !prev);
  };
  return (
    <div className="modal active">
      <div className="modal_content">
        <input
          name="description"
          type="text"
          defaultValue={nnu?.id + nnu?.name + nnu?.telephone}
          placeholder="введите дополнительную информацию"
          onChange={(e) => setAdminComment(e.target.value)}
        />
        <button onClick={() => makeAppAdmin({ slot, id, date })}>отправить</button>
        <button type="button" onClick={() => setActiveNNU(false)}>
          Отмена
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
