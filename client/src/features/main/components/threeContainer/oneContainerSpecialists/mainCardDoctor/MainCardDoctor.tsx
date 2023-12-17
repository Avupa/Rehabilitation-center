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
      <div>
        <img src={doctor.img} alt={doctor.firstName} className="img-card-doctor" />
      </div>
      <div className="container-main-card-doctor-description">
        <div className="flex">
          <p>Специалисты нашего центра</p>
        </div>
        <div className="container-description border-3px-solid-orange w-full h-64">
          <div>
            <h1>
              {doctor.firstName}&nbsp;{doctor.secondName}&nbsp;{doctor.patronymic}
            </h1>
          </div>
          <div>
            <h1>
              {doctor.firstName}&nbsp;{doctor.secondName}&nbsp;{doctor.patronymic}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainCardDoctor;
