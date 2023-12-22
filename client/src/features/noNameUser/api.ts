import type { NoNameUser, IdNoNameUser, NoNameUserWithoutID } from './type';

export const initNoNameUserFetch = async (): Promise<NoNameUser[]> => {
  const data: NoNameUser[] = await (await fetch('/api/noNameUsers/')).json();
  return data;
};

export const delFetchNoNameUser = async (id: IdNoNameUser): Promise<IdNoNameUser> => {
  const data: { id: IdNoNameUser } = await (
    await fetch(`/api/noNameUsers/${id}`, {
      method: 'DELETE',
    })
  ).json();
  return data.id;
};

export const addNoNameUserFetch = async (obj: NoNameUserWithoutID): Promise<NoNameUser> => {
  const res = await fetch('/api/noNameUsers/add', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      obj,
    }),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: NoNameUser = await res.json();
  return data;
};
