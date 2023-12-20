const { where } = require('sequelize');
const { Chat, User } = require('../../db/models');

const router = require('express').Router();

router.get('/:senderId', async (req, res) => {
  try {
    const { senderId } = req.params;
    const messages = await Chat.findAll({
      where: { chatId: senderId },
      include: {
        model: User,
        as: 'sender',
        attributes: {
          exclude: ['password', 'updatedAt', 'isAdmin', 'createdAt'],
        },
      },
    });
    console.log(messages[0].User);
    res.json({ messages });
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const newMessage = req.body;
    console.log(newMessage);
    if (newMessage.content) {
      let message = await Chat.create(newMessage);
      message = await Chat.findOne({
        where: { id: message.id },
        include: {
          model: User,
          as: 'sender',
          attributes: {
            exclude: ['password', 'updatedAt', 'isAdmin', 'createdAt'],
          },
        },
      });
      res.json({message})
    } else {
      res.json({error: 'Заполните поле!'})
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
