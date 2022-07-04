"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "feeds",
      [
        {
          feed: "Today there was sun sun sun and more sun But luckily also some wind in the meantime! You don't think that's so wrong because then we can cool off a bit outside! At the beginning of the afternoon we all played in the castle and there were also a lot of beautiful drawings. While eating fruit we had taken everything outside again and we sat there eating together. Now everyone is playing with each other in the beautiful blue sky!",

          imageUrl:
            "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMHBsYXlncm91ZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",

          createdAt: new Date(),
          updatedAt: new Date(),
          childId: 1,
          teacherId: 1,
        },

        {
          feed: "Today me and Sandra were on the group with you. We made it a pleasant afternoon. Drinking, eating and chatting together at the table. Then play with the group inside, because you thought it was very warm outside. Some were very tired of the warm weather or the four days you had last week. So we had a picnic with the group, played with the blocks and cars, provided the dolls with food and clean pants, drove on the train track and read a book. We had a great time with you.",
          imageUrl:
            "https://images.unsplash.com/photo-1532636653654-e243fbe850b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpZHMlMjBwbGF5Z3JvdWR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          childId: 3,
          teacherId: 3,
        },
        {
          feed: "Today we played a ping pong game. You had to be able to blow hard for this, but luckily this worked out pretty well. Not only did the ball go neatly from glass to glass, but the water also jumped in all directions. After lunch we went to make a lion with paint. They turned out very beautiful, but probably still too wet to take home. Don't forget to take it home with you next week?",
          imageUrl:
            "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
          childId: 2,
          teacherId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("feeds", null, {});
  },
};
