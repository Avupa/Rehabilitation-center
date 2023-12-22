import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { TimeSlot } from './DateType';
import { RootState, useAppDispatch } from '../../store/store';

import type { IdDoctor } from '../doctors/type';
import { makeAppoint } from './DateSlice';

import ModalWindow from './ModalWindow';
import ModalWindowNNU from './ModalWindowNNU';

function CardAppoint({
  id,
  date,
  slot,
}: {
  id: IdDoctor;
  date: string;
  slot: TimeSlot;
}): JSX.Element {
  const dispatch = useAppDispatch();
  console.log(slot);
  
  const user = useSelector((store: RootState) => store.auth.user);
  

  const [active, setActive] = useState<boolean>(false);
  const [activeNNU, setActiveNNU] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);


  const makeApp = ({ id, date, slot, adminComment='' }: { id: IdDoctor; date: string; slot: TimeSlot, adminComment:string }): void => {
    if (user) {
      dispatch(makeAppoint({ id, date, slot, adminComment}));
      setStatus((prev:boolean) => !prev);
    } else {
      setActive((prev:boolean)=>!prev);
    }
  };

  

  return (
    <>
      {!status && (
        <button
          className="main_link_button h-10 w-20"
          onClick={() =>(user?.isAdmin?(setActiveNNU((prev:boolean)=>!prev)):(makeApp({ slot: slot.timeSlot, id, date, adminComment:'' }))) }
        >
          {slot.timeSlot}
        </button>
      )}
      {active && <ModalWindow setActive={setActive} />}
      {activeNNU && (<ModalWindowNNU setActiveNNU={setActiveNNU} setStatus={setStatus} slot={slot.timeSlot} id={id} date={date}/>)}
    </>
  );
}

export default CardAppoint;
