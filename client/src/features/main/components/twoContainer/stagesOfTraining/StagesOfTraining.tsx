import React from 'react';
import './stagesOfTraining.css';

function StagesOfTraining(): JSX.Element {
  const containers = [
    '«Лечебное дело» - 1997г. (г.Тюмень)',
    '«Клиника Герасимова» -  1998г.',
    '«Неврология» - ординатура 1999г. (г.Тюмень)',
    '«Мануальная терапия» - переподготовка 2005г. (г.Тюмень)',
    '«Мануальная терапия» - ординатура 2008г. (г.Иркутск)',
    '«ИОМ им. Адрианова» - «Остеопатия» 2010 г. (г. Санкт-Петербург)',
    'INSTITUT SUPÉRIEUR D’OSTÉOPATHIE PARIS - Европейский диплом по остеопатии 2014 г.',
  ];

  return (
    <div className="main-container">
      <div className="header">
        <p>Основные этапы обучения Ефимова В.А.</p>
      </div>
      <div className="main-full-container pt-8">
        <div id="StagesOfTraining-full-container-wight" className="main-full-container">
          {containers.map((container, index) => (
            <div
              key={index + 1}
              className={`container-description container-flex ${
                index + 1 > 4 ? 'border-3px-solid-dark-green' : 'border-3px-solid-orange'
              }`}
            >
              <div>
                <p className="text-center">{container}</p>
              </div>
              <div
                className={`container-img ${
                  index + 1 > 4 ? 'border-3px-solid-orange' : 'border-3px-solid-dark-green'
                }`}
              >
                <p>{index + 1}.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StagesOfTraining;
