'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Categories', [
      {
        name: 'Фитнес студия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Остеопатия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Полезные процедуры',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Массаж',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Неврология',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
