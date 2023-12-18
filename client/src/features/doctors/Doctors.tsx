import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import CardDoctor from './DoctorCard';
import './style.css';

function Doctors(): JSX.Element {
  const doctors = useSelector((store: RootState) => store.Doctor.doctors);
  return (
    <>
      <p className="text-green-500">Наши доктора</p>
      {doctors.map((doctor) => (
        <CardDoctor key={doctor.id} doctor={doctor} />
      ))}
    </>
  );
}

export default Doctors;
