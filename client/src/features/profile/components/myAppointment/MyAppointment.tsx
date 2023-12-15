import React, { useState } from 'react';
import './myAppointment.css';

function MyAppointment(): JSX.Element {
  const initTable = (): string[][] => [
    ['ДАТА', 'ВРАЧ', 'ПРИЕМ', 'ДЕЙСТВИЯ'],
    ['24.11.2000', 'Руся', 'АЛЁ', 'Массаж простаты'],
    ['24.11.2012', 'Даниил', 'МАЛЁ', 'Массаж для похудения(жри и худей)'],
    ['24.11.2014', 'Вита', 'Как все заебало', 'Массаж головы'],
  ];

  const [table, setTable] = useState<string[][]>(initTable); // Уточнение типа для "table"

  return (
    <div>
      <table className="myTable">
        <tbody>
          {table.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyAppointment;
