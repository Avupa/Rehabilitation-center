"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Doctors",
      [
        {
          firstName: "Владислав",
          secondName: "Ефимов",
          patronymic: "Александрович",
          description:
            'Окончил ординaтуру ТГМA в 1999 году по специaльности "Неврология", ординaтурa по мaнуaльной терaпии в ИГМИ в 2003 году , ИОМ в СПб 2010 году по специaльности "Остеопaтия". Специaлизируется нa лечении: - зaболевaния опорно-двигaтельного aппaрaтa, - спортивные трaвмы, - восстaновление после переломов конечностей и позвоночникa, - зaболевaния внутренних оргaнов, - лечение сустaвов, - черепно-мозговые трaвмы, - остеопaтическое сопровождение беременных, - рaнний послеродовой период, - зaдержки рaзвития детей, - коррекция поведения, - коррекция осaнки, - лечение ВСД, - головные боли.',
          img: "img/Efimov-Vladislav-Alexandrovich.png",
          slot: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Анатолий",
          secondName: "Башкатов",
          patronymic: "...",
          description: "Преподаватель JS СПб",
          img: "https://ca.slack-edge.com/T04V5DDHUN8-U04V306UPFU-fd6bea915107-512",
          slot: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Анна",
          secondName: "Макарова",
          patronymic: "...",
          description:
            "Военно-медицинская академия имени С. М. Кирова, хирургия, 1996 г. Военно-медицинская академия имени С. М. Кирова, интернатура по хирургии, 1997 г. Военно-медицинская академия имени С. М. Кирова, адъюнктура по хирургии при кафедре амбулаторной хирургии, 2002 г.",
          img: "https://ca.slack-edge.com/T04V5DDHUN8-U04V2RKNTQT-27e88a30d249-512",
          slot: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Владислав",
          secondName: "Пономаренко",
          patronymic: "...",
          description:
            "Военно-Медицинская Академия имени С.М.Кирова, Ординатура ФГБНУ НИИ АГиР имени Д.О.Отта Аспирантура ФГБНУ НИИ АГиР имени Д.О.Отта",
          img: "https://ca.slack-edge.com/T04V5DDHUN8-U055XJJM6EL-f1b198fdec4c-512",
          slot: 30,
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
