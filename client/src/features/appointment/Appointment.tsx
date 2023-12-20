import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

//import CardSpec from './SpecCard';
import { Specialization } from './DateType';
import CardDoctor from '../doctors/DoctorCard';

function Appointment(): JSX.Element {
  const allSpecializations = useSelector((store: RootState) => store.appoint.specialization);
  const doctors = useSelector((store: RootState) => store.Doctor.doctors);
  const [specOne, setSpecOne] = useState<Specialization['id'] | undefined>(undefined);

  return (
    <>
      {allSpecializations &&
        allSpecializations.map((spec) => (
          <button
            className="main_link_button h-30 w-200"
            key={spec.id}
            onClick={() => setSpecOne(spec.id)}
          >
            {spec.name}
          </button>
        ))}
      {specOne &&
          (doctors.filter(doctor=>(doctor.SpecialOfDoctors?.filter(el => el.specializationId === specOne))?.length>0 )).map(
             doctor=> <CardDoctor key={doctor.id} doctor={doctor} />)
    }
    </>
  );
}

export default Appointment;
