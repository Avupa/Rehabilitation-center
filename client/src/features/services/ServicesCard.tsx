import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Procedure } from './redux/types/type';

function ServicesCard({ procedure }: { procedure: Procedure }): JSX.Element {
  const [openDescription, setOpenDescription] = useState(false);

  return (
    <div className="card">
      <p>{procedure.name}</p>
      <button type="button" onClick={() => setOpenDescription(true)}>
        Подробнее
      </button>
      <Link to="/appointment">
        <div className="main-link-button">
          <p>Записаться</p>
        </div>
      </Link>
      {openDescription && <p>{procedure.description}</p>}
    </div>
  );
}

export default ServicesCard;
