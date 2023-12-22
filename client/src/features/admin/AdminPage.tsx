/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FromSite from './FromSite';
import DoctorAdd from '../doctors/DoctorAdd';
import type { TTab } from './type';
import Services from '../procedure/Procedure';
import Doctors from '../doctors/Doctors';
import Chats from '../adminChat/Chats';
import Appointment from '../appointment/Appointment';

import ScheduleFull from './ScheduleFull';
import type { RootState } from '../../store/store';
import './style.css'

function Admin(): JSX.Element {
  const tabs: TTab[] = [
    { id: 1, label: 'Заявки  на прием' },
    { id: 2, label: 'Изменить информацию о специалистах' },
    { id: 3, label: 'Изменить перечень услуг' },
    { id: 4, label: 'Внести корректировку в расписание' },
    { id: 5, label: 'Запись' },
    { id: 6, label: 'Label №6' },
  ];
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const user = useSelector((store: RootState) => store.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth/sign-in');
    }
  }, []);

  return (
    <>
      <div className="navbarAdmin">
        <button className="btnNav" onClick={() => setSelectedTabId(1)}>
          Заявки на прием{' '}
        </button>
        <button className="btnNav" onClick={() => setSelectedTabId(2)}>
          Изменить информацию о специалистах{' '}
        </button>
        <button className="btnNav" onClick={() => setSelectedTabId(3)}>
          Изменить перечень услуг
        </button>
        <button className="btnNav" onClick={() => setSelectedTabId(4)}>
          Pасписание
        </button>
        <button className="btnNav" onClick={() => setSelectedTabId(5)}>
          Запись
        </button>
        <button className="btnNav" onClick={() => setSelectedTabId(6)}>
          Чат
        </button>
      </div>
      <div className="  ">
        {selectedTabId === tabs[0].id && (
          <div>
            <FromSite />
          </div>
        )}
        {selectedTabId === tabs[1].id && (
          <div>
            <div>
              Добавить информацию о новом специалисте
              <DoctorAdd />
            </div>
            <div>
              Изменить информацию о существующем специалисте
              <Doctors />
            </div>
          </div>
        )}
        {selectedTabId === tabs[2].id && (
          <div>
            <Services />
          </div>
        )}
        {selectedTabId === tabs[3].id && (
          <div>
            <ScheduleFull />
          </div>
        )}
        {selectedTabId === tabs[5].id && (
          <div>
            <Chats />
          </div>
        )}
        {selectedTabId === tabs[4].id && (
          <div>
            <Appointment />
          </div>
        )}
      </div>
    </>
  );
}

export default Admin;
