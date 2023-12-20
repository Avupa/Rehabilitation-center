import type { Specialization } from "../appointment/DateType";

export type State = {
  doctors: Doctor[];
  error: undefined | string;
};

export type Doctor = {
  id: number;
  firstName: string;
  secondName: string;
  patronymic: string;
  img: string;
  shortDescription: string;
  description: string;
  slot: number;
  SpecialOfDoctors?: Specialization[];
};

export type IdDoctor = Doctor['id'];

export type DoctorWithOutPhoto=Omit <Doctor , ('img') >
