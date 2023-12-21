import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

// import CardSpec from './SpecCard';
import type { Specialization } from './DateType';
import CardDoctor from '../doctors/DoctorCard';
import './appointment.css'

function Appointment(): JSX.Element {
  const allSpecializations = useSelector((store: RootState) => store.appoint.specialization);
  const doctors = useSelector((store: RootState) => store.Doctor.doctors);
  const [specOne, setSpecOne] = useState<Specialization['id'] | undefined>(undefined);

  return (
    <div>
      <div className='appContainer'>
      {allSpecializations &&
        allSpecializations.map((spec) => (
          <button
            className='appBTN'
            key={spec.id}
            onClick={() => setSpecOne(spec.id)}
          >
            {spec.name}
          </button>
        ))}
        </div>
        <div className="main_full_container_wrap">
      {specOne &&
        doctors
          .filter(
            (doctor) =>
              doctor.SpecialOfDoctors?.filter((el) => el.specializationId === specOne)?.length > 0,
          )
          .map((doctor) => <CardDoctor key={doctor.id} doctor={doctor} />)}
          </div>
    </div>
  );
}

export default Appointment;
