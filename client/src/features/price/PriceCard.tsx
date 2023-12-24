/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Appointment from '../appointment/Appointment';
import type { Price } from './type';
import { useNavigate } from 'react-router-dom';

function CardPrice({ el }: { el: Price}): JSX.Element {
const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate()

  return (
    <div className="cardSmall" style={{height: "auto"}} >
      <div className='text-center' style={
        {padding: '20px'}
      }>
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
      {showAll && <div style={
        {padding: '20px'}
      }>{el.description}</div>}
      <div>
        {el.price} RUB
      </div>

      <button className="main_link_button h-10 w-40" onClick={() => navigate('/appointment')}>
        Запись{' '}
      </button>
    </div>
  );
}

export default CardPrice;
