import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import CardServices from './ServicesCard';

function Services(): JSX.Element {
  const procedures = useSelector((store: RootState) => store.Procedure.procedures);

  //   console.log(procedures);

  return (
    <div>
      {procedures.length &&
        procedures.map((procedure) => <CardServices key={procedure.id} procedure={procedure} />)}
    </div>
  );
}

export default Services;
