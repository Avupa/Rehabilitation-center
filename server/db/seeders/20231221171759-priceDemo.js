"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Prices",
      [
        {
          procedureId: 1,
          price: 1200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 2,
          price: 2200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 3,
          price: 2500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 4,
          price: 2700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 5,
          price: 3500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 5,
          price: 4500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 6,
          price: 1400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 7,
          price: 4700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 8,
          price: 5700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 9,
          price: 5300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 10,
          price: 1500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 11,
          price: 4500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 12,
          price: 2000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 13,
          price: 1700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 14,
          price: 1800,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 15,
          price: 1500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 16,
          price: 1200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 17,
          price: 1100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 18,
          price: 900,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 18,
          price: 900,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 19,
          price: 1900,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 20,
          price: 2400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 21,
          price: 2700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 22,
          price: 2000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 23,
          price: 2500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 24,
          price: 2300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 25,
          price: 2800,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 26,
          price: 2400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 27,
          price: 1200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 28,
          price: 1300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 29,
          price: 2600,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 30,
          price: 3000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          procedureId: 31,
          price: 1200,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Prices", null, {});
  },
};
