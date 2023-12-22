/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import FromSite from './FromSite';
import DoctorAdd from '../doctors/DoctorAdd';
import type { TTab } from './type';
import Services from '../procedure/Procedure';
import Doctors from '../doctors/Doctors';
import Chats from '../adminChat/Chats';
import Appointment from '../appointment/Appointment';
import ScheduleFull from './ScheduleFull';



function Admin(): JSX.Element {
  const tabs: TTab[] = [
    { id: 1, label: "Заявки  на прием" },
    { id: 2, label: "Изменить информацию о специалистах" },
    { id: 3, label: "Изменить перечень услуг" },
    { id: 4, label: "Внести корректировку в расписание" },
    { id: 5, label: "Запись" },
    { id: 6, label: "Label №6" },
  ];
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  return (
  <>
  <div className="navbar">
  <button className='main_link_button' onClick={() => setSelectedTabId(1)}>Заявки  на прием  </button>
  <button className='main_link_button' onClick={() => setSelectedTabId(2)}>Изменить информацию о специалистах  </button>
  <button className='main_link_button' onClick={() => setSelectedTabId(3)}>Изменить перечень услуг</button>
  <button className='main_link_button' onClick={() => setSelectedTabId(4)}>Pасписание</button>
  <button className='main_link_button' onClick={() => setSelectedTabId(5)}>Запись</button>
  <button className='main_link_button' onClick={() => setSelectedTabId(6)}>Чат</button>
  </div>
  <div className="  ">
  {selectedTabId === tabs[0].id && (<div><FromSite/></div>)}
  {selectedTabId === tabs[1].id && (<div>
  <div>Добавить информацию о новом специалисте<DoctorAdd/></div>
  <div>Изменить информацию о существующем специалисте<Doctors/></div></div>)}
  {selectedTabId === tabs[2].id && (<div><Services/></div>)}
  {selectedTabId === tabs[3].id && (<div><ScheduleFull/></div>)}  
  {selectedTabId === tabs[5].id && (<div><Chats /></div>)}   
  {selectedTabId === tabs[4].id && (<div><Appointment/></div>)}     
        </div>
        </>
  )
}


export default Admin;