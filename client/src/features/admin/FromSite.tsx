import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import CardNoName from './CardNoName';

function FromSite(): JSX.Element {
  const noNameUsers = useSelector((store:RootState)=>store.NNU.noNameUsers)
  
  return (
  <>
    {noNameUsers.map(noNameUser=><CardNoName noNameUser={noNameUser} key={noNameUser.id} />)}
  </>
  )
}

export default FromSite;