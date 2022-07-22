"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "teachers",
      [
        {
          name: "Vidya",
          username: "Vidya@doodles.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          branch: "Amsterdam",
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
