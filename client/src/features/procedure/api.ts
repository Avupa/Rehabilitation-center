import type { Procedure, IdProcedure } from '../procedure/redux/types/type';

export const initProceduresFetch = async (): Promise<Procedure[]> => {
  const data: Procedure[] = await (await fetch('/api/procedures/')).json();
  return data;
};

export const addFetchProcedures = async (obj: FormData): Promise<Procedure> => {
  const res = await fetch('/api/procedures/add', {
    method: 'POST',
    body: obj,
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: Procedure = await res.json();
  return data;
};

export const delFetchProcedures = async (id: IdProcedure): Promise<IdProcedure> => {
  const data: { id: IdProcedure } = await (
    await fetch(`/api/procedures/${id}`, {
      method: 'DELETE',
    })
  ).json();
  return data.id;
};

export const updateFetchProcedures = async ({
  id,
  name,
  description,
  categoryId,
}: Procedure): Promise<Procedure> => {
  const data: Procedure  = await (
    await fetch(`/api/procedures/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        name,
        description,
        categoryId,
      }),
    })
  ).json();
  return data;
};
