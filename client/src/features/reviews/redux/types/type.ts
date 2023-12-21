import type { User } from '../../../User/userType';
import type { Doctor } from '../../../doctors/type';

export type State = {
  reviews: Review[];
  error: undefined | string;
};

export type Review = {
  id: number;
  grade?: number;
  description: string;
  doctorId?: number;
  userId: number;
  Doctor?: Doctor;
  User: User;
};

export type IdReview = Review['id'];

export type ReviewWithoutId = Omit<Review, 'id'>