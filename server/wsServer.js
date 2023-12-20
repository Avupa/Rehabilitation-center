const ws = require('ws');

const { Chat, User } = require('./db/models');

module.exports = function createWs() {
  const serverWs = new ws.Server({ port: 3000 });

  serverWs.on('connection', (wsClient) => {
    console.log('Всем ку');
    wsClient.on('message', async (message) => {
      const data = JSON.parse(message);
      const newMessage = await Chat.create({
        content: data.content,
        senderId: data.senderId,
        recipientId: data.recipientId,
        chatId: data.chatId
      });
      const messageChat = await Chat.findOne({
        where: { id: newMessage.id },
        include: { model: User },
      });
      serverWs.clients.forEach((el) =>
        el.send(JSON.stringify({ messageChat }))
      );
    });

    wsClient.on('close', () => {
      console.log('Я ушел');
    });
  });
};
