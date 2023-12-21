import type { IdDoctor } from '../doctors/redux/types/type';
import type { Specialization, TimeSlot } from './DateType';

export const initSpecFetch = async (): Promise<Specialization[]> => {
  const data: Specialization[] = await (await fetch('/api/appointment/initSpec')).json();
  return data;
};

export const findDateFetch = async ({
  id,
  date,
}: {
  id: IdDoctor;
  date: string;
}): Promise<TimeSlot[]> => {
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

export const makeAppointFetch = async ({
  id,
  date,
  slot,
}: {
  id: IdDoctor;
  date: string;
  slot: TimeSlot;
}): Promise<TimeSlot> => {
  const res = await fetch('/api/appointment/makeAppoint', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      id,
      date,
      slot,
    }),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: TimeSlot = await res.json();
  return data;
};
