import React from 'react';
import { Link } from 'react-router-dom';
import FromSite from './FromSite';
import DoctorAdd from '../doctors/DoctorAdd';


function Admin(): JSX.Element {

  return (
  <>
  <p className="text-green-500">Кабинет администратора</p>;
  <div className="  ">
          <div>Заявки  на прием</div>
          <FromSite/>
          <Link to="/appointment">Запись</Link>
          <Link to="/scheduledoctors">Внести расписание специалистов</Link>
          <Link to="/changeschedule">Внести корректировку в расписание</Link>
          <Link to="/changeservice">Изменить перечень услуг</Link>
          <Link to="/doctors">Изменить информацию о специалистах</Link>
          <DoctorAdd/>
        </div>
        </>
  )
}


export default Admin;