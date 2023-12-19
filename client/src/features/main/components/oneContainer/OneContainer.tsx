import React from 'react';
import TwoContainerGrade from './twoContainerGrade/TwoContainerGrade';
import OneContainerAppointment from './oneContainerAppointment/OneContainerAppointment';

function OneContainer(): JSX.Element {
  return (
    <div>
      <OneContainerAppointment />
      <TwoContainerGrade />
    </div>
  );
}
export default OneContainer;
