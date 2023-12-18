import React from 'react';
import type { Procedure } from './redux/types/type';

function ServicesCard({ procedure }: { procedure: Procedure }): JSX.Element {
  return (
    <div className="card">
      <p>{procedure.name}</p>
      <p>{procedure.description}</p>
    </div>
  );
}

export default ServicesCard;
