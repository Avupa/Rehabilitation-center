import React from 'react';
import { Message } from './type';

function MessageRow({ message }: { message: Message }): JSX.Element {
  return (
    <div>
      <div>{message.senderId}</div>
      <p>{message.content}</p>
    </div>
  );
}

export default MessageRow;
