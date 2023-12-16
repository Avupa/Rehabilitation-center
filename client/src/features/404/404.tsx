import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../../public/videos/404-cat.mp4';
import img from '../../../public/img/404/pill.png';
import './404.css';

function ErrorPage(): JSX.Element {
  return (
    <body id="ErrorPage">
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
      <div className="ErrorPage_full_container">
        <div className="ErrorPage_container">
          <p>4</p>
          <Link to="/">
            <img src={img} alt="pill" className="pill_spiner" />
          </Link>
          <p>4</p>
        </div>
        <p className="desctiption">
          Страница удалена или никогда не была создана. Нажмите на таблетку, чтобы перейти на
          главную страницу.
        </p>
      </div>
    </body>
  );
}

export default ErrorPage;
