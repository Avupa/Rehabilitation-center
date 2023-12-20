import React, { useState } from 'react' 
import './chat.css'
import { Chat } from './type'

function Chat():JSX.Element {
  const [chats,setChats] = useState<Chat[]>([])
  const [chatId, setChatId] = useState<Chat['chatId']>(0)

  return (
    <div className='chatContainer'>
      <div className='chats'>
        {chats.map(chat => (<div key={chat.chatId} onClick={setChatId(chat.chatId)}>{chat.recipient.secondName} {chat.recipient.firstName}</div>))}
      </div>
      <div className='chat'>
        Тут будет один чат
      </div>
    </div>
  )
}

export default Chat