import React, { useState } from 'react';

// import ModalWindow from './ModalWindow';
import { useSelector } from 'react-redux';
import type { TimeSlot } from './DateType';
import type { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';

import type { IdDoctor } from '../doctors/redux/types/type';
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
      void dispatch(makeAppoint({ id, date, slot, adminComment}));
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
          {slot.timeSlot.substring(0,5)}
        </button>
      )}
      {active && <ModalWindow setActive={setActive} />}
      {activeNNU && (<ModalWindowNNU setActiveNNU={setActiveNNU} setStatus={setStatus} slot={slot.timeSlot} id={id} date={date}/>)}
    </>
  );
}

export default CardAppoint;
