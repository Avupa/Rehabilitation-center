import React from 'react';
import type { Review } from '../redux/types/type';

type TypeReviewCard = {
  review: Review;
};

function ReviewCard({ review }: TypeReviewCard): JSX.Element {
  function ShortenText(text: string, containerWidth: number, containerHeight: number): string {
    const fontSize = 20; // Размер шрифта
    const averageCharacterWidth = 0.6 * fontSize; // Средняя ширина символа в пикселях
    const averageCharacterHeight = 1.2 * fontSize; // Средняя высота строки в пикселях
    const maxCharactersPerLine = Math.floor(containerWidth / averageCharacterWidth); // Максимальное количество символов в строке
    const maxLines = Math.floor(containerHeight / averageCharacterHeight); // Максимальное количество строк

    const maxCharacters = maxCharactersPerLine * maxLines; // Окончательное максимальное количество символов

    if (text.length > maxCharacters) {
      return `${text.substring(0, maxCharacters)}...`;
    }
    return text;
  }

  return (
    <div
      key={review.id}
      className="container_description border_3px_solid_dark_green width_360px h-96 p-6 mb-5"
    >
      <p className="text-2xl mb-2">
        {review.User.firstName}&nbsp;{review.User.patronymic}
      </p>
      <div>
        <p className="text-lg">{ShortenText(review.description, 360, 200)}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
