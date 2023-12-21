import React from 'react';
import { useSelector } from 'react-redux';
import type { MessageWithSender } from './type';
import './help.css';
import type { RootState } from '../../store/store';

function MessageRow({ message }: { message: MessageWithSender }): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  return user ? (
    <div className={message.senderId === user.id ? 'messageRow sender' : 'messageRow'}>
      <div className="nameMessage">
        {message.sender.secondName} {message.sender.firstName}
      </div>
      <h2>{message.content}</h2>
    </div>
  ) : (
    <div />
  );
}

export default MessageRow;
