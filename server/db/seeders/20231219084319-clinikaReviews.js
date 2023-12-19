"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ClinikaReviews",
      [
        {
          grade: 5,
          description:
            "Реабилитационный центр доктора Ефимова В.А. - это место, где здоровье и благополучие пациентов находятся в самых заботливых руках. Профессиональный и дружелюбный персонал, современное оборудование и индивидуальный подход делают эту клинику идеальным выбором для всех, кто ценит качество и заботу о своем здоровье.",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          grade: 4,
          description:
            "Здесь забота о пациентах ставится на первое место. Профессиональный коллектив специалистов, широкий спектр медицинских услуг и индивидуальный подход делают эту клинику идеальным выбором для всех, кто ценит высокий уровень медицинского обслуживания.",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          grade: 5,
          description:
            "Мне нравится к вам приходить, из-за вашего профессионализма и заботы. Уютная атмосфера, дружелюбный персонал и высокий уровень медицинского обслуживания делают эту клинику наилучшим выбором для всех, кто ищет надежное место для своего здоровья.",
          userId: 4,
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
