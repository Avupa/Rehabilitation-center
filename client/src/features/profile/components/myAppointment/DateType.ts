
import type { Appointment} from '../../../User/userType';

export type TimeSlot={
  id:number,
  date:Date,
  time:string
}

export type State={
  timeSlot:undefined | TimeSlot[];
  error:string | undefined
  appointment: Appointment[]| []
}



