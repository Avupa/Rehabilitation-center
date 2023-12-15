import React from 'react';
import { Link } from 'react-router-dom';
import FromSite from './FromSite';


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
          <Link to="/changedoctor">Изменить информацию о специалистах</Link>
        </div>
        </>
  )
}


export default Admin;