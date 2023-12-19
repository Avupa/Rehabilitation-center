import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

function Reviews(): JSX.Element {
  const reviewForDoctors = useSelector((store: RootState) => store.ReviewForDoctors.reviewForDoctors);
  const reviewForСlinics = useSelector((store: RootState) => store.ReviewForСlinics.reviewForСlinics);
console.log(reviewForDoctors);
console.log(reviewForСlinics);

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
    <div className="main_full_container">
      <div className="main_full_container">
        <p className="text-green-500">Отзывы</p>
      </div>
    </div>
  );
}

export default Reviews;
