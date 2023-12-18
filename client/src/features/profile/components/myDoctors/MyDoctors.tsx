import React, { useState } from 'react';
import './myDoctors.css';

function MyDoctors(): JSX.Element {
  const initTable = (): string[][] => [
    ['ВРАЧ', 'ДЕЙСТВИЯ'],
    ['Руся', 'Массаж простаты'],
    ['Даниил', 'Массаж для похудения(жри и худей)'],
    ['Вита', 'Массаж головы'],
  ];

  const table = useState<string[][]>(initTable); // Уточнение типа для "table"

  return (
    <div>
      <table className="myTable">
        <tbody>
          {table[0].map((row, rowIndex) => (
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

export default MyDoctors;
