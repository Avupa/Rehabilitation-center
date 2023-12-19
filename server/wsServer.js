const ws = require('ws');

const { Chat, User } = require('./db/models');

module.exports = function createWs() {
  const serverWs = new ws.Server({ port: 3000 });

  serverWs.on('connection', (wsClient) => {
    console.log('Привет в чате');
    wsClient.on('message', async (message) => {
      const data = JSON.parse(message);
      const newMessage = await Chat.create({
        content: data.message,
        userId: data.id,
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
      console.log('кто то ушел');
    });
  });
};
