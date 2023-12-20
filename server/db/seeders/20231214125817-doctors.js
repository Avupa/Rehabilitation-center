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
          shortDescription:
            "Главврач, основатель «Реабилитационного центра доктора Ефимова В.А», врач невролог-остеопат-подиатр. Опыт работы более 25 лет.",
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
          shortDescription: "Сокращенное описание",
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
          shortDescription: "Сокращенное описание",
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
          shortDescription: "Сокращенное описание",
          description:
            "Военно-Медицинская Академия имени С.М.Кирова, Ординатура ФГБНУ НИИ АГиР имени Д.О.Отта Аспирантура ФГБНУ НИИ АГиР имени Д.О.Отта",
          img: "https://ca.slack-edge.com/T04V5DDHUN8-U055XJJM6EL-f1b198fdec4c-512",
          slot: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Кулим",
          secondName: "Кирилов",
          patronymic: "Кирилович",
          shortDescription: "Сокращенное описание",
          description:
            "Военно-Медицинская Академия имени С.М.Кирова, Ординатура ФГБНУ НИИ АГиР имени Д.О.Отта Аспирантура ФГБНУ НИИ АГиР имени Д.О.Отта",
          img: "img/doctor-web-1.jpg",
          slot: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Евгений",
          secondName: "Зайцев",
          patronymic: "Дмитриевич",
          shortDescription: "Сокращенное описание",
          description:
            "Военно-Медицинская Академия имени С.М.Кирова, Ординатура ФГБНУ НИИ АГиР имени Д.О.Отта Аспирантура ФГБНУ НИИ АГиР имени Д.О.Отта",
          img: "img/doctor-web-2.jpg",
          slot: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Кирилл",
          secondName: "Турсанов",
          patronymic: "Дмитриевич",
          shortDescription: "Сокращенное описание",
          description:
            "Военно-Медицинская Академия имени С.М.Кирова, Ординатура ФГБНУ НИИ АГиР имени Д.О.Отта Аспирантура ФГБНУ НИИ АГиР имени Д.О.Отта",
          img: "img/doctor-web-3.jpg",
          slot: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Александр",
          secondName: "Мумсик",
          patronymic: "Алексеевич",
          shortDescription: "Сокращенное описание",
          description:
            "Военно-Медицинская Академия имени С.М.Кирова, Ординатура ФГБНУ НИИ АГиР имени Д.О.Отта Аспирантура ФГБНУ НИИ АГиР имени Д.О.Отта",
          img: "img/doctor-web-4.jpg",
          slot: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Александра",
          secondName: "Кукурузина",
          patronymic: "Михайловна",
          shortDescription: "Сокращенное описание",
          description:
            "Военно-Медицинская Академия имени С.М.Кирова, Ординатура ФГБНУ НИИ АГиР имени Д.О.Отта Аспирантура ФГБНУ НИИ АГиР имени Д.О.Отта",
          img: "img/doctor-web-5.jpg",
          slot: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Джамулудин",
          secondName: "Шаст",
          patronymic: "Симович",
          shortDescription: "Сокращенное описание",
          description:
            "Военно-Медицинская Академия имени С.М.Кирова, Ординатура ФГБНУ НИИ АГиР имени Д.О.Отта Аспирантура ФГБНУ НИИ АГиР имени Д.О.Отта",
          img: "img/doctor-web-6.jpg",
          slot: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Владислав",
          secondName: "Кукурузов",
          patronymic: "Станиставович",
          shortDescription: "Сокращенное описание",
          description:
            "Военно-Медицинская Академия имени С.М.Кирова, Ординатура ФГБНУ НИИ АГиР имени Д.О.Отта Аспирантура ФГБНУ НИИ АГиР имени Д.О.Отта",
          img: "img/doctor-web-7.jpg",
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
