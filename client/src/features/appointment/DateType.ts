import type { NoNameUser } from "../noNameUser/type"


export type TimeSlot={
  id:number,
  date:Date,
  time:string,
  adminComment?: string|undefined
}

export type TimeSlotFull={
  id:number,
  userName:string,
  userTelephone:string,
  userEmail:string,
  date:Date,
  time:string,
  adminComment?: string|undefined,
  DoctorName:string
}

export type Specialization={
  specializationId:number,
  name:string,
  id:number
}

export type State={
  error:string | undefined
  appointment: TimeSlot[]| []
  specialization:Specialization[]|[]
  nnu:NoNameUser|undefined;
  scheduleFull:TimeSlotFull[]| []
}



