/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import FromSite from './FromSite';
import DoctorAdd from '../doctors/DoctorAdd';
import type { TTab } from './type';
import Services from '../procedure/Procedure';
import Doctors from '../doctors/Doctors';
import Chat from '../adminChat/chat';


function Admin(): JSX.Element {
  const tabs: TTab[] = [
    { id: 1, label: "Заявки  на прием" },
    { id: 2, label: "Label №2" },
    { id: 3, label: "Label №2" },
    { id: 4, label: "Label №2" },
    { id: 6, label: "Label №6" },
  ];
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  return (
  <>
  <div className="navbar">
  <button className='main_link_button' onClick={() => setSelectedTabId(1)}>Заявки  на прием  </button>
  <button className='main_link_button' onClick={() => setSelectedTabId(2)}>Изменить информацию о специалистах  </button>
  <button className='main_link_button' onClick={() => setSelectedTabId(3)}>Изменить перечень услуг  </button>
  <button className='main_link_button' onClick={() => setSelectedTabId(4)}>Внести корректировку в расписание  </button>
  <button className='main_link_button' onClick={() => setSelectedTabId(5)}>Запись</button>
  <button className='main_link_button' onClick={() => setSelectedTabId(6)}>Чат</button>
  </div>
  <div className="  ">
  {selectedTabId === tabs[0].id && (<div><FromSite/></div>)}
  {selectedTabId === tabs[1].id && (<div>
  <p>Добавить нового специалиста<DoctorAdd/></p>
  <p>Изменить существующего специалиста<Doctors/></p></div>)}
  {selectedTabId === tabs[2].id && (<div><Services/></div>)}
  {selectedTabId === tabs[3].id && (<div><Services/></div>)}  
  {selectedTabId === tabs[4].id && (<div><Chat/></div>)}   
        </div>
        </>
  )
}


export default Admin;