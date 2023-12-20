import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import './help.css';
import MessageRow from './MessageRow';
import * as api from './api';

function Help(): JSX.Element {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const user = useSelector((store: RootState) => store.auth.user);

  const ws = new WebSocket('ws://127.0.0.1:3000');

  useEffect(() => {
    if (user) {
      api
        .initMessagesFetch(user?.id)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      
      setMessages((prev) => [...prev, messageData.content]);
    };

    return () => {
      ws.close();
    };
  }, []);
  const sendMessage = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const messageData = {
      senderId: user?.id,
      recipientId: 1,
      content: newMessage,
      chatId: user?.id,
    };

    ws.send(JSON.stringify(messageData));
    setNewMessage('');
  };
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
          <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Help;
