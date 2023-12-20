import React from 'react';
import { useState } from 'react';

import { updateProcedures } from './redux/procedureSlice';
import { useAppDispatch } from '../../store/store';


import type { Procedure } from './redux/types/type';


function ProcedureUpdate({ procedure, setShowUpdate }: { procedure: Procedure , setShowUpdate: (status: boolean) => void;}): JSX.Element {
  //const checkAdmin = useSelector((store: RootState) => store.auth.user?.isAdmin);
 // const checkAdmin = true;
 const dispatch = useAppDispatch();
  const [name, setName] = useState(procedure.name);
  const [description, setDescription] = useState(procedure.description);


  const update = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      updateProcedures({ id: procedure.id, name, description }),
    );
    setShowUpdate(false);
  };
  return (
    <form onSubmit={update}>
      <input
        name="name"
        type="text"
        value={procedure.name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="description"
        type="text"
        value={procedure.description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      <button className="" type="submit">
        сохранить изменения
      </button>
    </form>
  );
}



export default ProcedureUpdate;
