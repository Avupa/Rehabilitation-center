import React from 'react';
import OurCenterSpecialists from './oneContainerSpecialists/OurCenterSpecialists';
import img from '../../../../../public/img/main/image1656.png';

function ThreeContainer(): JSX.Element {
  return (
    <div>
      <img src={img} alt="image1656" className="w-full" />
      <OurCenterSpecialists />
    </div>
  );
}
export default ThreeContainer;
