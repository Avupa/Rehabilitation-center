import React from 'react';
//import ModalWindow from './ModalWindow';
import  type { TimeSlot } from './DateType';
import { useAppDispatch } from '../../store/store';

import type { IdDoctor } from '../doctors/type';
import { makeAppoint } from './DateSlice';


function CardAppoint({id, date, slot }: {id:IdDoctor, date:string, slot: TimeSlot }): JSX.Element {
  const dispatch=useAppDispatch()
  const makeIt=({id, date, slot}:{id:IdDoctor, date:string, slot: TimeSlot}):void=>{
    dispatch(makeAppoint({id, date, slot}))
  }

  return (
    <>
<button className='main_link_button h-10 w-20'onClick={()=>makeIt({slot:slot.timeSlot, id, date})}>{slot.timeSlot}</button>
   </>
  )
}

export default CardAppoint;