/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Appointment from '../appointment/Appointment';
import type { Price } from './type';

function CardPrice({ el }: { el: Price}): JSX.Element {
const [showAll, setShowAll] = useState(false);
  const [appoint, setAppoint] = useState(false);

  return (
    <div className="cardSmall">
      <div>
        {el.name}
      </div>
      {!showAll && (
        <button className="main_link_button h-10 w-40" onClick={() => setShowAll(true)}>
          Подробнее
        </button>
      )}
      {showAll && (
        <button className="main_link_button h-10 w-10" onClick={() => setShowAll(false)}>
          X
        </button>
      )}
      {showAll && <div>{el.description}</div>}
      <div>
        {el.price}
      </div>

      <button className="main_link_button h-10 w-40" onClick={() => setAppoint(true)}>
        Запись{' '}
      </button>
      {appoint && <Appointment />}
    </div>
  );
}

export default CardPrice;
