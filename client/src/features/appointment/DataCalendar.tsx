import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import type { IdDoctor } from '../doctors/type';
import { findDate } from './DateSlice';
import CardAppoint from './AppointCard';
import { useAppDispatch } from '../../store/store';
import { TimeSlot } from './DateType';

export default function Example({ id }: { id: IdDoctor }): JSX.Element {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [slots,setSlots]=useState<TimeSlot|undefined>(undefined)

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (startDate) {
      const stringDate = [
        startDate?.getFullYear(),
        startDate?.getMonth() + 1,
        startDate?.getDate(),
      ].join('-');
      dispatch(findDate({ id, date: stringDate })).then((data) => setSlots(data.payload));
    }
  }, [dispatch, id, startDate]);

  return (
    <>
      <DatePicker
        selected={startDate}
        excludeDates={[new Date()]}
        onChange={(date: Date) => setStartDate(date)}
      />
      {slots &&
        slots.map((slot) => (
          <CardAppoint
            key={slot.id}
            slot={slot}
            id={id}
            date={[startDate?.getFullYear(), startDate?.getMonth() + 1, startDate?.getDate()].join(
              '-',
            )}
          />
        ))}
    </>
  );
}
