import React, { useEffect, useState } from 'react';
import './chat.css';
import { useSelector } from 'react-redux';
import type { Chat } from './type';
import * as api from './api';
import PersonalChat from './PersonalChat';
import type { RootState } from '../../store/store';

function Chats(): JSX.Element {
  const [chats, setChats] = useState<Chat[]>([]);
  const [chatId, setChatId] = useState<Chat['chatId']>(2);
  const user = useSelector((store: RootState) => store.auth.user);

  useEffect(() => {
    let updateChats: number;
    if (user) {
      api
        .initChatsFetch()
        .then((data) => setChats(data))
        .catch((error) => console.log(error));

       updateChats = setInterval(
        () =>
          api
            .initChatsFetch()
            .then((data) => JSON.stringify(data) !== JSON.stringify(chats) && setChats(data))
            .catch((error) => console.log(error)),
        5000,
      );
    }
    return () => clearInterval(updateChats);
  }, []);

  return (
    <div className="chatContainer">
      <div className="chats">
        {chats.map((chat) => (
          <button
            type="button"
            className="btnChats"
            key={chat.chatId}
            onClick={() => setChatId(chat.chatId)}
          >
            {chat.recipient.secondName} {chat.recipient.firstName}
          </button>
        ))}
      </div>
      <PersonalChat chatId={chatId} />
    </div>
  );
}

export default Chats;
