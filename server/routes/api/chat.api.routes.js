const { Chat, User, sequelize } = require('../../db/models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const uniqueChats = await Chat.findAll({
      attributes: [
        'chatId',
        [sequelize.fn('MAX', sequelize.col('createdAt')), 'last_message_date']
      ],
      group: ['chatId'],
      order: [['chatId'], [sequelize.literal('last_message_date'), 'DESC']],
    });

    const usersId = uniqueChats.map(el => el.chatId)
    const users = await User.findAll({
      where: {
        id: usersId,
      },
      attributes: {
        exclude: ['password', 'updatedAt', 'isAdmin', 'createdAt'],
      },
      raw: true
    });

    const chats = uniqueChats.map((chat,index) => ({chatId:chat.chatId, recipient:users[index]}))

    console.log(chats);
    res.json({ chats });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
