import React from 'react';
import { useSelector} from 'react-redux';
import type { RootState } from '../../store/store';
import type { TimeSlotFull } from '../appointment/DateType';

function ScheduleFull(): JSX.Element {
  const Schedule=useSelector((store:RootState)=>store.appoint.scheduleFull)
  console.log(Schedule);
  

  return (
    <div>
      <table className="myTable">
        <tbody>
          {Schedule && Schedule.map((appoint:TimeSlotFull) => (
            <tr key={appoint.id}>
                <td>{appoint.date}</td>
                <td>{appoint.time}</td>
                <td>{appoint.userName}</td>
                <td>{appoint.DoctorName}</td>
                <td>{appoint.adminComment}</td>
                <td>{appoint.userTelephone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleFull;