import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import ReviewsForClinic from './reviewsForClinic/ReviewsForClinic';
import ReviewsForDoctors from './reviewsForDoctors/ReviewsForDoctors';

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
    <div>
      <ReviewsForClinic reviews={reviews} />
      <ReviewsForDoctors reviews={reviews} />
    </div>
  );
}

export default Reviews;
