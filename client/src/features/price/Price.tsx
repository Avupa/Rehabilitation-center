import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import CardPrice from './PriceCard';
import './style.css'

function Price(): JSX.Element {
  const AllPrices=useSelector((store:RootState)=>store.prices.prices)
  console.log(AllPrices);
  
  return (
    <div className='main_full_container_wrap'>
    {AllPrices.map(el=><CardPrice key={el.id} el={el}/>)}
    </div>
  );
}

export default Price;
