'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('noNameUsers', [
      {
     name: 'John Doe',
     telephone: '89676754657',
     description:'хочу на прием к владимиру',
     createdAt: new Date(),
     updatedAt:new Date()
     },
     {
      name: 'Зинаида Павловна',
      telephone: '8963452456',
      description:'запишите на прием к доктору Иванову, пожалуйста',
      createdAt: new Date(),
      updatedAt:new Date()
      },
      {
        name: 'Роман',
        telephone: '75673459283',
        description:'а как пользоваться сайтом',
        createdAt: new Date(),
        updatedAt:new Date()
        },

    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('noNameUsers', null, {});

  }
};
