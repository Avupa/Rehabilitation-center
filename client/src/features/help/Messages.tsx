import React from 'react'
import Message from './Message';

function Messages(): JSX.Element {
  const messages = [1,2];
  return (
    <div>
      {messages.map(message=> <Message message={message}/>)}
    </div>
  )
}

export default Messages