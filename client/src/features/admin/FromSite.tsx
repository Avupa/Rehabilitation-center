import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import CardNoName from './CardNoName';
import './style.css'

function FromSite(): JSX.Element {
  const noNameUsers = useSelector((store: RootState) => store.NNU.noNameUsers);

  return (
    <div className='containerNN'>
      {noNameUsers.map((noNameUser) => (
        <CardNoName noNameUser={noNameUser} key={noNameUser.id} />
      ))}
    </div>
  );
}

export default FromSite;
