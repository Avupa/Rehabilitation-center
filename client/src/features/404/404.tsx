import React from 'react';
import video from '../../../public/videos/404-cat.mp4';
import img from '../../../public/img/pill.png';
import './404.css';
import { Link } from 'react-router-dom';

function ErrorPage(): JSX.Element {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture // Добавьте этот атрибут
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        <track label="English" kind="subtitles" srcLang="en" src="subtitles_en.vtt" default />
        Ваш браузер не поддерживает тег video.
      </video>
      <div className="full-container">
        <div className="containe">
          <p>4</p>
          <Link to="/">
            <img src={img} alt="pill" />
          </Link>
          <p>4</p>
        </div>
        <p className="desctiption">
          Страница удалена или никогда не была создана. Нажмите на таблетку, чтобы перейти на
          главную страницу.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
