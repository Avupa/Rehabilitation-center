import type { User } from "../User/userType";

export type State={
  user:undefined | User;
  error:string | undefined
}

export type Rega= {
  firstName:string;
  secondName:string;
  patronymic?:string;
  telephone:string;
  email:string;
  password:string;
  cpassword:string;
}

export type Login = {
  email: string;
  password: string;
}