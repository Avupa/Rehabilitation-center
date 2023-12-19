import type { ReviewForDoctor, IdReviewForDoctor } from '../redux/types/type';

export const initReviewForDoctorsFetch = async (): Promise<ReviewForDoctor[]> => {
  const data: ReviewForDoctor[] = await (await fetch('/api/reviews/doctors/')).json();
  return data;
};

export const addFetchReviewForDoctors = async (obj: FormData): Promise<ReviewForDoctor> => {
  const res = await fetch('/api/reviews/doctors/add', {
    method: 'POST',
    body: obj,
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: ReviewForDoctor = await res.json();
  return data;
};

export const delFetchReviewForDoctors = async (
  id: IdReviewForDoctor,
): Promise<IdReviewForDoctor> => {
  const data: { id: IdReviewForDoctor } = await (
    await fetch(`/api/reviews/doctors/${id}`, {
      method: 'DELETE',
    })
  ).json();
  return data.id;
};

export const updateFetchReviewForDoctors = async ({
  id,
  grade,
  description,
  doctorId,
  userId,
}: ReviewForDoctor): Promise<ReviewForDoctor> => {
  const data: { obj: ReviewForDoctor } = await (
    await fetch(`/api/reviews/doctors/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        grade,
        description,
        doctorId,
        userId,
      }),
    })
  ).json();
  return data;
};
