

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
  Doctor:string;
  data:string;
  timeSlot:string
}