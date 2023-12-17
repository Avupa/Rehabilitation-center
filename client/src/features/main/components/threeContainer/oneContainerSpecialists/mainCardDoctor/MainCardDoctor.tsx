import React from 'react';
import './mainCardDoctor.css';
import type { Doctor } from '../../../../../doctors/type';

type TypeDoctor = {
  doctor: Doctor;
};

function MainCardDoctor({ doctor }: TypeDoctor): JSX.Element {
  console.log(doctor);

  return (
    <div className="main-full-container">
      <img src={doctor.img} alt="imgDoctor" className="w-96" />
      <div className="container-main-card-doctor-description">
        <div className="flex">
          <p>Специалисты нашего центра</p>
        </div>
        <div className="container-description border-3px-solid-orange">
          <p>{doctor.firstName}</p>
          <p>{doctor.secondName}</p>
          <p>{doctor.patronymic}</p>
        </div>
      </div>
    </div>
  );
}
export default MainCardDoctor;
