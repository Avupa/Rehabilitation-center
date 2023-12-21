import React from 'react';
import type { MessageWithSender } from './type';
import './help.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


function MessageRow({ message }: { message: MessageWithSender }): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user)
  return (
    <div className = {message.senderId === user.id ? 'messageRow sender': 'messageRow'}>
      <div className='nameMessage'>
        {message.sender.secondName} {message.sender.firstName}
      </div>
      <h2>{message.content}</h2>
    </div>
  );
}

export default MessageRow;
