"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("children", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("feeds", "childId", {
      type: Sequelize.INTEGER,
      references: {
        model: "children",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("feeds", "teacherId", {
      type: Sequelize.INTEGER,
      references: {
        model: "teachers",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("children", "userId");
    await queryInterface.removeColumn("feeds", "childId");
    await queryInterface.removeColumn("feeds", "teacherId");
  },
};
