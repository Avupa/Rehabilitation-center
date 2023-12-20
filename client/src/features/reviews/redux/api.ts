import type { Review, IdReview } from './types/type';

export const initReviewsFetch = async (): Promise<Review[]> => {
  const data: Review[] = await (await fetch('/api/reviews/')).json();
  return data;
};

export const addFetchReviews = async (obj: FormData): Promise<Review> => {
  const res = await fetch('/api/reviews/add', {
    method: 'POST',
    body: obj,
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: Review = await res.json();
  return data;
};

export const delFetchReviews = async (id: IdReview): Promise<IdReview> => {
  const data: { id: IdReview } = await (
    await fetch(`/api/reviews/${id}`, {
      method: 'DELETE',
    })
  ).json();
  return data.id;
};

export const updateFetchReviews = async ({
  id,
  grade,
  description,
  userId,
  doctorId,
}: Review): Promise<Review> => {
  const data: { obj: Review } = await (
    await fetch(`/api/reviews/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        grade,
        description,
        userId,
        doctorId,
      }),
    })
  ).json();
  return data;
};
