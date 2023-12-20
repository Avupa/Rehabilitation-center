
import type { Appointment} from '../../features/User/userType';

export type TimeSlot={
  id:number,
  date:Date,
  time:string
}

export type Specialization={
  specializationId:number,
  name:string,
  id:number
}

export type State={
  timeSlot:undefined | TimeSlot[];
  error:string | undefined
  appointment: Appointment[]| []
  specialization:Specialization[]
}



