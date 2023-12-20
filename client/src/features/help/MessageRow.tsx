import React from 'react';
import type { MessageWithSender } from './type';


function MessageRow({ message }: { message: MessageWithSender }): JSX.Element {
  return (
    <div>
      <div>
        {message.sender.secondName} {message.sender.firstName}
      </div>
      <p>{message.content}</p>
    </div>
  );
}

export default MessageRow;
