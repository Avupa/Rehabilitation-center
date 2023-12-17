import React from 'react';
import './mainCardDoctor.css';
import type { Doctor } from '../../../../../doctors/type';
import arrow from '../../../../../../../public/img/icon/arrow/Arrow-white.png';

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
          <p className="text-3xl">Специалисты нашего центра</p>
          <div className="green-circle">
            <img src={arrow} alt="arrow" className="bg-white" />
          </div>
        </div>
        <div className="container-description border-3px-solid-orange w-full h-64 mt-8 py-10 px-10">
          <div className="w-10/12">
            <div>
              <h1 className="text-2xl">
                {doctor.firstName}&nbsp;{doctor.secondName}&nbsp;{doctor.patronymic}
              </h1>
            </div>
            <div>
              <p className="text-lg pt-2">{doctor.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainCardDoctor;
