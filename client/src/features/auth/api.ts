import type { Appointment, User } from '../User/userType';
import type { Login, Rega } from './authType';

export const registrationFetch = async (obj: Rega): Promise<User> => {
  const res = await fetch('/api/auth/registration', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const loginFetch = async (obj: Login): Promise<User> => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const logoutFetch = ():void => {
  fetch('/api/auth/logout')
};

export const checkFetch = async (): Promise<User | undefined> => {
  const data = await (await fetch('/api/auth/check')).json();
  if (data.message === 'success') return data.user;
  return undefined;
};

export const initUserAppsFetch=async(id:User['id']): Promise<Appointment[]|undefined>=>{
  const res = await fetch('/api/auth/initUserApps', {
    method: 'POST',
    body: JSON.stringify({id}),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data.appointment;
}
