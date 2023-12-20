
import type { Doctor } from "../doctors/type";

export type User={
  id:number;
  firstName:string;
  secondName:string;
  patronymic?:string;
  telephone:string;
  email:string;
  isAdmin: boolean;
  appointment?: Appointment[]
}

export type UserWithoutRoleApp = Omit<User, 'isAdmin' | 'appointment'>;
 
export type Appointment={
  firstName:Doctor['firstName'];
  secondName:Doctor['secondName'];
  patronymic:Doctor['patronymic'];
  date:string;
  time:string
}