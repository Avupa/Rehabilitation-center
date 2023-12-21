import React from 'react';

import type { IdNoNameUser } from '../noNameUser/type';
import { useAppDispatch } from '../../store/store';
import { deleteNoNameUsers } from '../noNameUser/noNameUserSlice';

function ModalWindow({ setActive,id}:{setActive:(status:boolean)=>void,id:IdNoNameUser}):JSX.Element {
const dispatch = useAppDispatch()
const del=():void=>{
dispatch(deleteNoNameUsers(id))
setActive(false)
}
  
  return (
    <div className='modal active'>
    <div className="modal_content">
   вы точно хотите удалить этот запрос?
   
   <button type='button'onClick={del} >да</button>
   <button type='button' onClick={()=>setActive(false)}>нет</button>
      </div>
      </div>
  )
}

export default ModalWindow;