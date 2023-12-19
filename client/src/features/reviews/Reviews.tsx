import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import ReviewCard from './reviewCard/ReviewCard';
import type { Review } from './redux/types/type';

function Reviews(): JSX.Element {
  const reviews = useSelector((store: RootState) => store.Review.reviews);
  // console.log(review);

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
      <div className="header">
        <p>Услуги реабилитационного центра</p>
      </div>
      <div className="main_full_container_wrap">
        {reviews.length && reviews.map((review: Review) => <ReviewCard review={review} />)}
      </div>
    </div>
  );
}

export default Reviews;
