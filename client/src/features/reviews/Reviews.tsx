import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

function Reviews(): JSX.Element {
  const reviewForDoctors = useSelector(
    (store: RootState) => store.ReviewForDoctors.reviewForDoctors,
  );
  const reviewForСlinics = useSelector(
    (store: RootState) => store.ReviewForСlinics.reviewForСlinics,
  );
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

  function ShortenText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  }

  return (
    <div>
      <div className="header">
        <p>Услуги реабилитационного центра</p>
      </div>
      <div className="main_full_container_wrap">
        {reviewForDoctors.length &&
          reviewForDoctors.map((container) => (
            <div
              key={container.id}
              className="container_description border_3px_solid_dark_green width_360px h-96 p-6"
            >
              <div className="flex">
                <p className="">{ShortenText(container.description, 100)}</p>
              </div>
              <div className="">
                <p className="">{ShortenText(container.description, 100)}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Reviews;
