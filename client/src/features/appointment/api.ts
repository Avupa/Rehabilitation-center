
import type { IdDoctor } from '../doctors/redux/types/type';
import { NoNameUser } from '../noNameUser/type';
import type { Specialization, TimeSlot, TimeSlotFull } from './DateType';


export const initSpecFetch = async (): Promise<Specialization[]> => {
  const data: Specialization[] = await (await fetch('/api/appointment/initSpec')).json();
  return data;
};


export const initScheduleFullFetch= async (): Promise<TimeSlotFull[]> => {
  const data: TimeSlotFull[] = await (await fetch('/api/appointment/admin')).json();
  return data;
};

export const strangeFetch = async (nnu:NoNameUser): Promise<NoNameUser> => {
  
  const res = await fetch('/api/appointment/strange', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({nnu}),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: NoNameUser = await res.json();
  return data;
};


export const findDateFetch = async ({ id, date }: { id: IdDoctor; date: string }): Promise<TimeSlot[]> => {
  
  const res = await fetch('/api/appointment/findDate', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      doctorid: id,
      date,
    }),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: TimeSlot[] = await res.json();
  return data;
};


export const makeAppointFetch = async ({ id, date, slot, adminComment }: { id: IdDoctor; date: string , slot:TimeSlot, adminComment:string}): Promise<TimeSlot> => {

  const res = await fetch('/api/appointment/makeAppoint', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      id,
      date,
      slot,
      adminComment,

    }),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: TimeSlot = await res.json();
  return data;
};
