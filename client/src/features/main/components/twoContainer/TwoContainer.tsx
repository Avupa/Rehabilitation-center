import React from 'react';
import MainServises from './services/MainServises';
import StagesOfTraining from './stagesOfTraining/StagesOfTraining';

function TwoContainer(): JSX.Element {
  return (
    <div className="white-container">
      <MainServises />
      <StagesOfTraining />
    </div>
  );
}
export default TwoContainer;
