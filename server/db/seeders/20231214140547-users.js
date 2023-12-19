"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Иван",
          secondName: "Иванович",
          patronymic: "Иванов",
          telephone: "88005553535",
          email: "1@1",
          isAdmin: true,
          password: await bcrypt.hash("123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "СерГей",
          secondName: "Оганов",
          patronymic: "Суренович",
          telephone: "88005553536",
          email: "2@2",
          isAdmin: false,
          password: await bcrypt.hash("123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Руслан",
          secondName: "Вита",
          patronymic: "Даниил",
          telephone: "88005553537",
          email: "3@3",
          isAdmin: false,
          password: await bcrypt.hash("123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ашот",
          secondName: "Рустаслав",
          patronymic: "Айсолович",
          telephone: "88005553538",
          email: "4@4",
          isAdmin: false,
          password: await bcrypt.hash("123", 10),
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
