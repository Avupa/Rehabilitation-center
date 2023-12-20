import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import './help.css';
import MessageRow from './MessageRow';
import * as api from './api';
import { MessageWithSender } from './type';

function Help(): JSX.Element {
  const [messages, setMessages] = useState<MessageWithSender[]>([]);
  const [newContent, setNewContent] = useState('');
  const [err, setErr] = useState('')
  const user = useSelector((store: RootState) => store.auth.user);

  useEffect(() => {
    if (user) {
      api
        .initMessagesFetch(user?.id)
        .then((data) => setMessages(data))
        .catch((error) => console.log(error));
    }
  }, []);

  const sendMessage = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    const newMessage = {
      chatId: user.id,
      senderId: user.id,
      content: newContent,
      recipientId: 1,
    }
    api
    .sendMessageFetch(newMessage)
    .then(data => data === 'Заполните поле!'? setErr(data) : setMessages((prev) => [...prev,data]))
    .catch((error) => console.log(error));
      
    console.log('...');
    
  }

  return (
    <div className="bg-grey w-full h-full">
      <p className="text-green-500">Помощь</p>
      <div>
        {messages.map((message) => (
          <MessageRow message={message} />
        ))}
      </div>
      <div>
        <form onSubmit={sendMessage}>
          <textarea value={newContent} onChange={(e) => setNewContent(e.target.value)} />
          <button type="submit">Send</button>
          <div>{err}</div>
        </form>
      </div>
    </div>
  );
}

export default Help;
