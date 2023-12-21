import React from 'react';
import './myAppointment.css';
import { useSelector} from 'react-redux';
import type { RootState } from '../../../../store/store';

function MyAppointment(): JSX.Element {
  const myAppointment=useSelector((store:RootState)=>store.auth.user?.appointment)
  console.log(myAppointment);

  return (
    <div>
      <table className="myTable">
        <tbody>
          {myAppointment.map((appoint) => (
            <tr>
                <td>{appoint.data}</td>
                <td>{appoint.timeSlot}</td>
                <td>{appoint.Doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyAppointment;
