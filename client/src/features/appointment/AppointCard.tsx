import React, { useState } from 'react';
// import ModalWindow from './ModalWindow';
import { useSelector } from 'react-redux';
import type { TimeSlot } from './DateType';
import type { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';

import type { IdDoctor } from '../doctors/redux/types/type';
import { makeAppoint } from './DateSlice';
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
  const [status, setStatus] = useState<boolean>(false);
  const makeApp = ({ id, date, slot }: { id: IdDoctor; date: string; slot: TimeSlot }): void => {
    if (user) {
      void dispatch(makeAppoint({ id, date, slot }));
      setStatus((prev) => !prev);
    } else {
      setActive(true);
    }
  };

  return (
    <>
      {!status && (
        <button
          className="main_link_button h-12 w-32"
          onClick={() => makeApp({ slot: slot.timeSlot, id, date })}
        >
          {slot.timeSlot}
        </button>
      )}
      {active && <ModalWindow setActive={setActive} />}
    </>
  );
}

export default CardAppoint;
