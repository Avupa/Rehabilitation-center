import  type { Appointment} from '../../../User/userType';
import type { IdDoctor } from '../../../doctors/type';
import { TimeSlot } from './DateType';

export const findDateFetch = async ({ id, date }: { id: IdDoctor; date: string }): Promise<TimeSlot[]> => {
  
  const res = await fetch('/api/appointment/findDate', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      doctorid: id,
      date
    }),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: TimeSlot[] = await res.json();
  return data;
};

export const makeAppointFetch = async ({ id, date, slot }: { id: number; date: string , slot:string}): Promise<Appointment> => {
  
  const res = await fetch('/api/appointment/makeAppoint', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      userid: id,
      date,
      slot
    }),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: Appointment= await res.json();
  return data;
};
