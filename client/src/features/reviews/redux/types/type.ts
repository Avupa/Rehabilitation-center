export type State = {
  reviewForDoctors: ReviewForDoctor[];
  reviewForСlinics: ReviewForСlinic[];
  error: undefined | string;
};

export type ReviewForDoctor = {
  id: number;
  grade: number;
  description: string;
  doctorId: number;
  userId: number;
};

export type IdReviewForDoctor = ReviewForDoctor['id'];

export type ReviewForСlinic = Omit<ReviewForDoctor, 'doctorId'>;

export type IdReviewForСlinic = ReviewForСlinic['id'];
