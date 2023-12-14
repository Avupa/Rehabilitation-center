'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Specializations',
      [
        {
          name: 'Мануальный терапевт',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Массажист',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Невролог',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Остеопат',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Подиатр',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Тренер',
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
