import React, { useState, useEffect } from 'react';
import ReviewCard from '../reviewCard/ReviewCard';
import type { Review } from '../redux/types/type';

type TypeReviewsForDoctors = {
  reviews: Review[];
};

function ReviewsForDoctors({ reviews }: TypeReviewsForDoctors): JSX.Element {
  const [selectedRadio, setSelectedRadio] = useState<number>(0);
  const filteredReviews = reviews.filter((review: Review) => review.Doctor !== null);
  const [reviewsSections, setReviewsSections] = useState<JSX.Element[]>([]);

  // Группируем отзывы по три в каждую секцию
  useEffect(() => {
    const sections = Array.from({ length: Math.ceil(filteredReviews.length / 3) }, (_, index) => {
      const start = index * 3;
      const end = start + 3;
      return (
        <div
          className="main_full_container_wrap"
          key={index}
          style={{ display: selectedRadio === index ? 'flex' : 'none' }}
        >
          {filteredReviews.slice(start, end).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      );
    });
    setReviewsSections(sections);
  }, [filteredReviews, selectedRadio]);

  // Генерируем радиокнопки
  const radioElements = Array.from(
    { length: Math.ceil(filteredReviews.length / 3) },
    (_, index) => (
      <div key={index} className="main_full_container_wrap gap-5">
        <input
          type="radio"
          id={`radio-${index}`}
          name="reviewSelectionDoctors"
          className="hidden_radio"
          value={index}
          checked={selectedRadio === index}
          onChange={() => setSelectedRadio(index)}
        />
        <label htmlFor={`radio-${index}`} className="custom_radio" />
      </div>
    ),
  );

  return (
    <div>
      <div className="header">
        <p>Отзывы о наших специалистах</p>
      </div>
      <div>{reviewsSections}</div>
      <div className="main_full_container_wrap">{radioElements}</div>
    </div>
  );
}

export default ReviewsForDoctors;