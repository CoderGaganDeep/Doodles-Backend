"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "children",
      [
        {
          name: "Jimmy",
          age: 3,
          branch: "Amsterdam",
          avatar:
            "https://images.unsplash.com/photo-1566513857792-9a52cd97e06d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          group: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Timnit",
          age: 3,
          branch: "Amsterdam",
          avatar:
            "https://images.unsplash.com/photo-1611890293555-2cb0075ecd3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9kZGxlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
          group: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Jadon",
          age: 4,
          branch: "Amsterdam",
          avatar:
            "https://images.unsplash.com/photo-1627639679690-db4d401aae84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dG9kZGxlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
          group: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          name: "Tia",
          age: 4,
          branch: "Amsterdam",
          avatar:
            "https://images.unsplash.com/photo-1571240571053-3ddc83cdb289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRvZGRsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
          group: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          name: "Myra",
          age: 3,
          branch: "Rotterdam",
          avatar:
            "https://images.unsplash.com/photo-1613248948503-74857459cd73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHRvZGRsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
          group: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
        },
        {
          name: "David",
          age: 3,
          branch: "Rotterdam",
          avatar:
            "https://images.unsplash.com/photo-1618847473021-27332d0af8e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRvZGRsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
          group: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
        },

        {
          name: "Pip",
          age: 4,
          branch: "Rotterdam",
          avatar:
            "https://images.unsplash.com/photo-1595712874516-b2739ab4f924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHRvZGRsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
          group: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          name: "Sonja",
          age: 4,
          branch: "Rotterdam",
          avatar:
            "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHRvZGRsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
          group: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("children", null, {});
  },
};
