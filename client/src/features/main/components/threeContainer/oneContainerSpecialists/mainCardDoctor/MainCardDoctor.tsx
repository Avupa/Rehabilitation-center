import React from 'react';
import './mainCardDoctor.css';
import type { Doctor } from '../../../../../doctors/type';
import arrow from '../../../../../../../public/img/icon/arrow/Arrow-white.png';

type TypeMainCardDoctor = {
  doctor: Doctor;
  PressRight: () => void;
  PressLeft: () => void;
  windowCardDoctor: number;
};

function MainCardDoctor({
  doctor,
  PressRight,
  PressLeft,
  windowCardDoctor,
}: TypeMainCardDoctor): JSX.Element | null {
  const handleClickRight = (): void => PressRight();
  const handleClickLeft = (): void => PressLeft();

  if (windowCardDoctor === doctor.id) {
    return (
      <div className="main-full-container container-MainCardDoctor-height">
        <div>
          <img src={doctor.img} alt={doctor.firstName} className="img-card-doctor" />
        </div>
        <div className="container-main-card-doctor-description">
          <div className="container-flex gap-6">
            <p className="text-3xl">Специалисты нашего центра</p>
            <button type="button" onClick={handleClickLeft}>
              <div className="green-circle container-flex">
                <img src={arrow} alt="arrow" className="transform rotate-180" />
              </div>
            </button>
            <button type="button" onClick={handleClickRight}>
              <div className="green-circle container-flex">
                <img src={arrow} alt="arrow" />
              </div>
            </button>
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
  return null; // Возвращаем null вместо <div />, чтобы скрыть карточку
}
export default MainCardDoctor;
