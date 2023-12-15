'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Владислав',
          secondName: 'Ефимов',
          patronymic: 'Александрович',
          telephone: '666',
          email: '1a@1',
          isAdmin: true,
          password: await bcrypt.hash('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'СерГей',
          secondName: 'Оганов',
          patronymic: 'Суренович',
          telephone: '89999999999',
          email: '1@1',
          isAdmin: false,
          password: await bcrypt.hash('123', 10),
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
