import React from 'react';
import type { Review } from '../../redux/types/type';

type TypeReviewCard = {
  review: Review;
};

function ReviewCard({ review }: TypeReviewCard): JSX.Element {
  function ShortenText(text: string, containerWidth: number, containerHeight: number): string {
    const fontSize = 22; // Размер шрифта
    const averageCharacterWidth = 0.6 * fontSize; // Средняя ширина символа в пикселях
    const averageCharacterHeight = 1.2 * fontSize; // Средняя высота строки в пикселях
    const maxCharactersPerLine = Math.floor(containerWidth / averageCharacterWidth); // Максимальное количество символов в строке
    const maxLines = Math.floor(containerHeight / averageCharacterHeight); // Максимальное количество строк

    const maxCharacters = maxCharactersPerLine * maxLines; // Окончательное максимальное количество символов
    if (typeof text === 'string') {
      if (text.length > maxCharacters) {
        return `${text.substring(0, maxCharacters)}...`;
      }
      return text;
    }
  }

  // Обработка текста
  const shortenedDescription = ShortenText(review.description, 360, 200);

  return (
    <div
      key={review.id}
      className="container_description border_3px_solid_dark_green width_365px h-96 p-6 mb-5"
    >
      <div className="flex justify-between">
        <p className="mb-2 w-52 h-12">
          {review.User.firstName} {review.User.patronymic}
        </p>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div key={index} className={`star ${index < review.grade ? 'background_gold' : ''}`} />
          ))}
      </div>
      <div>
        <p className="text-lg">{shortenedDescription}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
