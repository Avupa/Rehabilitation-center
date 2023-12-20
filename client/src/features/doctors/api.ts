import type { Doctor, IdDoctor } from './type';

export const initDoctorFetch = async (): Promise<Doctor[]> => {
  const data: Doctor[] = await (await fetch('/api/doctors/')).json();
  return data;
};

export const addFetchDoctor = async (obj: FormData): Promise<Doctor> => {

  const res = await fetch('/api/doctors/add', {
    method: 'POST',
    body: obj,
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: Doctor = await res.json();
  return data;
};

export const delFetchDoctor = async (id: IdDoctor): Promise<IdDoctor> => {
  const data: { id: IdDoctor } = await (
    await fetch(`/api/doctors/${id}`, {
      method: 'DELETE',
    })
  ).json();
  return data.id;
};

export const updateFetchDoctor = async (id:IdDoctor, obj: FormData): Promise<Doctor> => {
  console.log(id, 'iiiiiiiii');
  console.log(obj, 'gggggggg');

  
  const data:Doctor= await (
    await fetch(`/api/doctors/update/${id}`, {
      method: 'PUT',
  body: obj,
  })).json();
  return data
  };

