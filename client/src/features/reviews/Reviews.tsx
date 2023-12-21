import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import ReviewsForClinic from './components/reviewsForClinic/ReviewsForClinic';
import ReviewsForDoctors from './components/reviewsForDoctors/ReviewsForDoctors';
import InputReview from './components/inputReview/InputReview';

function Reviews(): JSX.Element {
  const reviews = useSelector((store: RootState) => store.Review.reviews);

  useEffect(() => {
    // Сохраняем ссылку на функцию очистки
    const { body } = document;
    body.style.backgroundColor = '#e7e7e7';

    // Функция для восстановления изначального цвета при удалении компонента
    return () => {
      body.style.backgroundColor = ''; // Или другой изначальный цвет
    };
  }, []);

  return (
    <div className="main">
      <ReviewsForClinic reviews={reviews} />
      <div className="ellipse background_green left-1/3" />
      <div className="ellipse background_blue left-2/3" />
      <ReviewsForDoctors reviews={reviews} />
      <InputReview />
    </div>
  );
}

export default Reviews;
