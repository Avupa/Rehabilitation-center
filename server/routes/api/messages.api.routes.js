const { where } = require('sequelize');
const Chat = require('../../db/models/chat');

const router = require('express').Router();

router.get('/:senderId',async(req, res) => {
  const { senderId } = req.params();
  const messages = await Chat.findAll({ where : { chatId: senderId }})
  res.json({messages})
})

module.exports = router;