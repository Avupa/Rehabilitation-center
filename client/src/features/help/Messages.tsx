// import React, { useEffect, useState } from 'react'
// import Message from './Message';

// function Messages(): JSX.Element {
//   const [messages, setMessages] = useState([])

//   useEffect(() => {
//     const ws = new WebSocket('ws://127.0.0.1:4000'); 

//     ws.onopen = () => {
//       console.log('WebSocket connected');
//     };

//     ws.onmessage = (event) => {
//       const messageData = JSON.parse(event.data);
//       // Обработка полученного сообщения и обновление состояния messages
//       setMessages(prevMessages => [...prevMessages, messageData.content]);
//     };

//     return () => {
//       ws.close();
//     };
//   }, []);
//   return (
//     <div>
//       {messages.map(message=> <Message message={message}/>)}
//     </div>
//   )
// }

// export default Messages