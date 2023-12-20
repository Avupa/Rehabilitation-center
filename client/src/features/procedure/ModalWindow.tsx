import React from 'react';

import type { Procedure } from './redux/types/type'
import { useAppDispatch } from '../../store/store';
import { deleteProcedures } from './redux/procedureSlice';

function ModalWindow({ setShowDelete, procedure}:{setShowDelete:(status:boolean)=>void,procedure:Procedure}):JSX.Element {
const dispatch = useAppDispatch()

const del=():void=>{
dispatch(deleteProcedures(procedure.id))
setShowDelete(false)
}
  
  return (
    <div className="modal_content">
   вы точно хотите удалить этот запрос?
   <button className=""  onClick={del} >да</button>
   <button className="" onClick={()=>setShowDelete(false)}>нет</button>
      </div>
  )
}

export default ModalWindow;