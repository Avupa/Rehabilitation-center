import type { NoNameUser, IdNoNameUser } from "./type";

export const initNoNameUserFetch = async (): Promise<NoNameUser[]> => {
    const data:NoNameUser[] = await (await fetch('/api/noNameUsers/')).json();
  return data 
  };

  export const delFetchNoNameUser = async (id:IdNoNameUser): Promise<IdNoNameUser> => {
    const data:{id:IdNoNameUser} = await (await  fetch(`/api/noNameUsers/${id}`,{
      method:'DELETE'
    })).json();
  return data.id 
  };
  