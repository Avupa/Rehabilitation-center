import React, { useState } from 'react';
import ReviewCard from '../reviewCard/ReviewCard';
import type { Review } from '../redux/types/type';

type TypeReviewsForClinic = {
  reviews: Review[];
};

function ReviewsForClinic({ reviews }: TypeReviewsForClinic): JSX.Element {
  const [selectedRadio, setSelectedRadio] = useState<number>(0);

  const filteredReviews = reviews.filter((review: Review) => review.Doctor === null);

  const radioElements = Array.from(
    { length: Math.ceil(filteredReviews.length / 3) },
    (_, index) => (
      <>
        <input
          type="radio"
          id={`radio-${index}`}
          name="reviewSelectionClinic"
          className="hidden_radio"
          value={index}
          checked={selectedRadio === index} // Проверим, выбрано ли это значение
          onChange={() => setSelectedRadio(index)} // Обновим состояние при изменении радио-кнопки
        />
        <label htmlFor={`radio-${index}`} className="custom_radio" />
      </>
    ),
  );

  return (
    <div>
      <div className="header">
        <p>Отзывы о клинике</p>
      </div>
      <div className="main_full_container_wrap">
        {filteredReviews.length &&
          filteredReviews.map((review: Review) => <ReviewCard key={review.id} review={review} />)}
      </div>
      <div className="main_full_container_wrap gap-5">{radioElements}</div>
    </div>
  );
}

export default ReviewsForClinic;
