import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MessageRow from '../help/MessageRow';
import * as api from '../help/api';
import type { RootState } from '../../store/store';
import type { MessageWithSender, MessageWithoutId } from '../help/type';

function PersonalChat({ chatId }: { chatId: number }): JSX.Element {
  const [messages, setMessages] = useState<MessageWithSender[]>([]);
  const [newContent, setNewContent] = useState('');
  const [err, setErr] = useState('');
  const user = useSelector((store: RootState) => store.auth.user);

  useEffect(() => {
    let updateMessages: number;
    if (user) {
      // Сразу загружаем всю переписку
      api
        .initMessagesFetch(chatId)
        .then((data) => setMessages(data))
        .catch((error) => console.log(error));
      // Тут обновляем данные каждые 5 секунд
      updateMessages = setInterval(
        () =>
          api
            .initMessagesFetch(chatId)
            /* Если длина массива, который у нас в стейте не равна длине массива, который нам пришел из БД
            Значит произошли изменения => меняем стейт для отрисовки */
            .then((data) => data.length !== messages.length && setMessages(data))
            .catch((error) => console.log(error)),
        5000,
      );
    }
    return () => clearInterval(updateMessages);
  }, [chatId]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newMessage: MessageWithoutId = {
      chatId,
      senderId: user?.id,
      content: newContent,
      recipientId: chatId,
    };
    api
      .sendMessageFetch(newMessage)
      .then((data) =>
        (typeof data === 'string') ? setErr(data) : setMessages((prev) => [...prev, data ]),
      )
      .catch((error) => console.log(error));
    setNewContent('');
    setErr('');
  };

  return (
    <div className="bg-grey w-full h-full">
      <p className="text-green-500">{chatId}</p>
      <div>
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
          <button type="submit">Отправить</button>
          <div>{err}</div>
        </form>
      </div>
    </div>
  );
}

export default PersonalChat;
