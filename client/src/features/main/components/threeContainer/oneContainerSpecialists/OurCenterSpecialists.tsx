import React from 'react';
import './ourCenterSpecialists.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../../store/store';
import MainCardDoctor from './mainCardDoctor/MainCardDoctor';

function OurCenterSpecialists(): JSX.Element {
  const doctors = useSelector((store: RootState) => store.Doctor.doctors);

  return (
    <div className="main-full-container">
      <div className="main-container">
        <div className="main-container-appointment">
          <div>
            {doctors.length &&
              doctors.map((doctor) => <MainCardDoctor key={doctor.id} doctor={doctor} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurCenterSpecialists;
