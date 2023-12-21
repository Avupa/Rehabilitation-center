import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import ServicesCard from './ProcedureCard';
import personeTraining from '../../../public/img/services/personal-training.jpg';
import './stile.css';

function Services(): JSX.Element {
  const procedures = useSelector((store: RootState) => store.Procedure.procedures);
  const checkAdmin = useSelector((store: RootState) => store.auth.user?.isAdmin);

  return (
    <div>
     {!checkAdmin && <img src={personeTraining} alt="personeTraining" className="w-full" />}
      <div className="servicesCard_full_container">
        <div className="servicesCard_sub_full_container">
          {procedures.length &&
            procedures.map((procedure) => (
              <ServicesCard key={procedure.id} procedure={procedure} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
