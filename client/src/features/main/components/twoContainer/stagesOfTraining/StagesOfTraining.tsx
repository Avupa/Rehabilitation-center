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
    <div className="main_container">
      <div className="header">
        <p>Основные этапы обучения Ефимова В.А.</p>
      </div>
      <div className="main_full_container_wrap pt-8">
        <div id="StagesOfTraining_full_container_wight" className="main_full_container">
          {containers.map((container, index) => (
            <div
              key={index + 1}
              className={`container_description container_flex width_260px ${
                index + 1 > 4
                  ? 'border_3px_solid_dark_green w-80 h-44'
                  : 'border_3px_solid_orange h-36'
              }`}
            >
              <div>
                <p className="text-center">{container}</p>
              </div>
              <div
                className={`container_img ${
                  index + 1 > 4 ? 'border_3px_solid_orange' : 'border_3px_solid_dark_green'
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
