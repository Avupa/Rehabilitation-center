import React, { useState } from 'react';
import './ourCenterSpecialists.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../../store/store';
import MainCardDoctor from './mainCardDoctor/MainCardDoctor';

function OurCenterSpecialists(): JSX.Element {
  const doctors = useSelector((store: RootState) => store.Doctor.doctors);
  const [windowCardDoctor, setWindowCardDoctor] = useState(1);

  const PressRight = (): void => {
    if (windowCardDoctor === doctors.length - 1) {
      setWindowCardDoctor(1);
    } else setWindowCardDoctor((prev) => prev + 1);
  };

  const PressLeft = (): void => {
    if (windowCardDoctor === 1) {
      setWindowCardDoctor(doctors.length - 1);
    } else setWindowCardDoctor((prev) => prev - 1);
  };

  return (
    <div className="main-full-container">
      <div>
        {doctors.length &&
          doctors.map((doctor) => (
            <MainCardDoctor
              key={doctor.id}
              doctor={doctor}
              PressRight={PressRight}
              PressLeft={PressLeft}
              windowCardDoctor={windowCardDoctor}
            />
          ))}
      </div>
    </div>
  );
}
export default OurCenterSpecialists;
