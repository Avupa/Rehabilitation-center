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
    <div id="main-container-grade">
      {containers.map((container, index) => (
        <div>
          <div key={index} className="grade-description">
            <div>
              <p>{container[1]}</p>
            </div>
            <div className="grade-img">
              <img src={container[0]} alt="#" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TwoContainerGrade;
