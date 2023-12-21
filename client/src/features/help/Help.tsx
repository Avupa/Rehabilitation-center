import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import './help.css';
import MessageRow from './MessageRow';
import * as api from './api';
import type { MessageWithSender, MessageWithoutId } from './type';
import { useNavigate } from 'react-router-dom';

function Help(): JSX.Element {
  const [messages, setMessages] = useState<MessageWithSender[]>([]);
  const [newContent, setNewContent] = useState('');
  const [err, setErr] = useState('');
  const user = useSelector((store: RootState) => store.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    let updateMessages: number;
    if (user) {
      // Сразу загружаем всю переписку
      api
        .initMessagesFetch(user.id)
        .then((data) => setMessages(data))
        .catch((error) => console.log(error));
      // Тут обновляем данные каждые 5 секунд
      updateMessages = setInterval(
        () =>
          api
            .initMessagesFetch(user.id)
            /* Если длина массива, который у нас в стейте не равна длине массива, который нам пришел из БД
            Значит произошли изменения => меняем стейт для отрисовки */
            .then((data) => data.length !== messages.length && setMessages(data))
            .catch((error) => console.log(error)),
        5000,
      );
    } else {
      navigate('/')
    }
    return () => clearInterval(updateMessages);
  }, []);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (user) {
      const newMessage: MessageWithoutId = {
        chatId: user.id,
        senderId: user.id,
        content: newContent,
        recipientId: 1,
      };
      api
        .sendMessageFetch(newMessage)
        .then((data) =>
          typeof data === 'string' ? setErr(data) : setMessages((prev) => [...prev, data]),
        )
        .catch((error) => console.log(error));
      setNewContent('');
      setErr('');
    } else {
      setErr('Вы не авторизованы!');
    }
  };

  return (
    <div className="bg-grey w-full h-full">
      <p className="text-green-500">Помощь</p>
      <div className="messagesContainer">
        {messages.map((message) => (
          <MessageRow message={message} key={message.id} />
        ))}
      </div>
      <div>
        <form
          onSubmit={sendMessage}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              sendMessage(event);
            }
          }}
        >
          <textarea value={newContent} onChange={(e) => setNewContent(e.target.value)} />
          <button type="submit">Send</button>
          <div>{err}</div>
        </form>
      </div>
    </div>
  );
}

export default Help;
