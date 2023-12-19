import type { ReviewForСlinic, IdReviewForСlinic } from '../redux/types/type';

export const initReviewForClinicsFetch = async (): Promise<ReviewForСlinic[]> => {
  const data: ReviewForСlinic[] = await (await fetch('/api/reviews/clinics/')).json();
  return data;
};

export const addFetchReviewForClinics = async (obj: FormData): Promise<ReviewForСlinic> => {
  const res = await fetch('/api/reviews/clinics/add', {
    method: 'POST',
    body: obj,
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: ReviewForСlinic = await res.json();
  return data;
};

export const delFetchReviewForСlinics = async (
  id: IdReviewForСlinic,
): Promise<IdReviewForСlinic> => {
  const data: { id: IdReviewForСlinic } = await (
    await fetch(`/api/reviews/clinics/${id}`, {
      method: 'DELETE',
    })
  ).json();
  return data.id;
};

export const updateFetchReviewForСlinics = async ({
  id,
  grade,
  description,
  userId,
}: ReviewForСlinic): Promise<ReviewForСlinic> => {
  const data: { obj: ReviewForСlinic } = await (
    await fetch(`/api/reviews/clinics/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        grade,
        description,
        userId,
      }),
    })
  ).json();
  return data;
};
