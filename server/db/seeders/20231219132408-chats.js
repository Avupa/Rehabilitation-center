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
          content: 'Здравствуйте, как я могу узнать график работы в праздничные дни?',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: 2,
          senderId: 1,
          recipientId: 2,
          content: 'Здравствуйте! 31 числа у нас сокращенный день до 17:00, 1 января - выходной, а со второго работаем по стандартному графику',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: 2,
          senderId: 2,
          recipientId: 1,
          content: 'Понял, спасибо!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: 2,
          senderId: 1,
          recipientId: 2,
          content: 'Я могу вам ещё чем-нибудь помочь?',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: 2,
          senderId: 2,
          recipientId: 1,
          content: 'Нет, на этом всё. Ещё раз спасибо!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: 3,
          senderId: 3,
          recipientId: 1,
          content: 'Здравствуйте, какой у вас адрес?',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: 3,
          senderId: 1,
          recipientId: 3,
          content: 'Добрый день! Наши контакты указаны на сайте, в конце страницы. Мы находимся по адресу: г. Тюмень, ул. Луначарского 18/1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: 3,
          senderId: 3,
          recipientId: 1,
          content: 'Спасибо!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: 3,
          senderId: 1,
          recipientId: 3,
          content: 'Будем рады Вас видеть, до встречи!',
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