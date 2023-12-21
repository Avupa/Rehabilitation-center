import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CardPrice from './PriceCard';

function Price(): JSX.Element {
  const AllPrices=useSelector((store:RootState)=>store.prices.prices)

  return (
    <div>
    {AllPrices.map(el=><CardPrice key={el.id} el={el}/>)}
    
    </div>
  );
}

export default Price;
