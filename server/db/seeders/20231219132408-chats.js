'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Chats',
      [
        {
          chatId: 2,
          senderId: 2,
          recipientId: 1,
          content: 'Хэллоу, мазафакер',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: 2,
          senderId: 1,
          recipientId: 2,
          content: 'Здравствуйте!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: 2,
          senderId: 2,
          recipientId: 1,
          content: 'Бла бла бла',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: 2,
          senderId: 1,
          recipientId: 2,
          content: 'Йоу йоу йоу',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: 2,
          senderId: 2,
          recipientId: 1,
          content: 'Бай бай',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
