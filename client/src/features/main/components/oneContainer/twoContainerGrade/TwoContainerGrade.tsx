import React from 'react';
import './twoContainerGrade.css';
import family from '../../../../../../public/img/icon/family.png';
import like from '../../../../../../public/img/icon/like.png';
import live from '../../../../../../public/img/icon/live.png';

function TwoContainerGrade(): JSX.Element {
  const containers = [
    [family, 'Индивидуальный подход детям и взрослым'],
    [like, '25 лет работы и более 120.000 пациентов'],
    [live, 'Персональные тренировки, реабилитация и массаж'],
  ];

  return (
    <div className="main_full_container pt-8">
      {containers.map((container, index) => (
        <div key={index} className="container_description border_3px_solid_orange container_flex">
          <p className='text_center'>{container[1]}</p>
          <div className="container_img border_3px_solid_orange">
            <img src={container[0]} alt="#" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TwoContainerGrade;
