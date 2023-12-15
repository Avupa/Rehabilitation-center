'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.bulkInsert('SpecialOfDoctors', [
  {           
    doctorId: 1,
    specializationId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {           
    doctorId: 1,
    specializationId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {           
    doctorId: 2,
    specializationId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {           
    doctorId: 2,
    specializationId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {           
    doctorId: 3,
    specializationId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {           
    doctorId: 2,
    specializationId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {           
    doctorId: 3,
    specializationId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
    
], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpecialOfDoctors', null, {});

  }
};
