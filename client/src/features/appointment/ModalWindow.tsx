import React, { useState } from 'react';

import { useAppDispatch } from '../../store/store';
import { addNoNameUsers } from '../noNameUser/noNameUserSlice';


function ModalWindow({ setActive}:{setActive:(status:boolean)=>void}):JSX.Element {
const dispatch = useAppDispatch()
const [application, setApplication]=useState(false)
const [name, setName]=useState<string>("")
const [telephone, setTelephone]=useState<string>("")
const [description, setDescription]=useState<string>("")

const send=():void=>{
dispatch(addNoNameUsers({name, telephone,description}))
setActive(false)
}
  
  return (
    <div className='modal active'>
    <div className="modal_content">
   пожалуйста, зарегистрируйтесь для записи к специалисту или оставьте заявку, и мы Вам перезвоним
   <button type='button'onClick={()=>setApplication(true)} >Оставить заявку</button>
   {application &&(
            <div className="mb-6">
            <input
              name="name"
              type="text"
              placeholder="Введите ваше имя"
              onChange={(e) => setName(e.target.value)}
            />
              <input
              name="telephone"
              type="text"
              maxLength={11}
              minLength={6}
              placeholder="Введите ваш телефон"
              onChange={(e) => setTelephone(e.target.value)}
            />
              <input
              name="description"
              type="text"
              placeholder="Введите ваш вопрос"
              onChange={(e) => setDescription(e.target.value)}
            />
             <button type='button'onClick={send} >Отправить</button>
          </div>
          
   )}
   <button type='button' onClick={()=>setActive(false)}>Зарегистрироваться</button>
   <button type='button' onClick={()=>setActive(false)}>Отмена</button>
      </div>
      </div>
  )
}

export default ModalWindow;