import type { Doctor } from "../doctors/type";

export type User={
  id:number;
  firstName:string;
  secondName:string;
  patronymic?:string;
  telephone:string;
  email:string;
  appointment?: Appointment[]
}
 
export type Appointment={
  firstName:Doctor['firstName']
  secondName:Doctor['secondName']
  patronymic:Doctor['patronymic']
  date:string,
  time:string
  
}