"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "teachers",
      [
        {
          name: "Vidya",
          username: "Vidya@doodles.com",
          password: "test",
          branch: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Wendy",
          username: "Wendy@doodles.com",
          password: "test",
          branch: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Saskia",
          username: "Saskia@doodles.com",
          password: "test",
          branch: "Rotterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("teachers", null, {});
  },
};
