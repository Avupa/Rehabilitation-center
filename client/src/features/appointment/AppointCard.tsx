import React, { useState } from 'react';
//import ModalWindow from './ModalWindow';
import type { TimeSlot } from './DateType';
import { RootState, useAppDispatch } from '../../store/store';

import type { IdDoctor } from '../doctors/type';
import { makeAppoint } from './DateSlice';
import { useSelector } from 'react-redux';
import ModalWindow from './ModalWindow';

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
  const user = useSelector((store: RootState) => store.auth.user);
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState<boolean>(false)
  const makeApp = ({ id, date, slot }: { id: IdDoctor; date: string; slot: TimeSlot }): void => {
    if (user) {
      dispatch(makeAppoint({ id, date, slot }));
      setStatus((prev) => !prev)

    } else {
      setActive(true);
    }
  };

  return (
    <>
      {!status &&<button
        className="main_link_button h-10 w-20"
        onClick={() => makeApp({ slot: slot.timeSlot, id, date })}
      >
        {slot.timeSlot}
      </button>}
      {active && <ModalWindow setActive={setActive} />}
    </>
  );
}

export default CardAppoint;
