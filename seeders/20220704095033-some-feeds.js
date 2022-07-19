"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "feeds",
      [
        {
          feed: "Today when sun is shining we are learning about Shapes & Colours. We played with blocks, solved some puzzels and played in water",

          imageUrl:
            "https://filedn.com/lNoARe6kYwfHEYXrn4wlGAR/doodles/feed1.jpeg",

          createdAt: new Date(),
          updatedAt: new Date(),
          childId: 1,
          teacherId: 1,
        },

        {
          feed: "Today me and Sandra were on the group with you. We made it a pleasant afternoon. Drinking, eating and chatting together at the table. Then play with the group inside, because you thought it was very warm outside. Some were very tired of the warm weather or the four days you had last week. So we had a picnic with the group, played with the blocks and cars, provided the dolls with food and clean pants, drove on the train track and read a book. We had a great time with you.",
          imageUrl:
            "https://filedn.com/lNoARe6kYwfHEYXrn4wlGAR/doodles/child1feed2.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
          childId: 1,
          teacherId: 1,
        },
        {
          feed: "Today we played a ping pong game. You had to be able to blow hard for this, but luckily this worked out pretty well. Not only did the ball go neatly from glass to glass, but the water also jumped in all directions. After lunch we went to make a lion with paint. They turned out very beautiful, but probably still too wet to take home. Don't forget to take it home with you next week?",
          imageUrl:
            "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
          childId: 2,
          teacherId: 1,
        },
        {
          feed: "Today we played a ping pong game. You had to be able to blow hard for this, but luckily this worked out pretty well. Not only did the ball go neatly from glass to glass, but the water also jumped in all directions. After lunch we went to make a lion with paint. They turned out very beautiful, but probably still too wet to take home. Don't forget to take it home with you next week?",
          imageUrl:
            "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
          childId: 2,
          teacherId: 1,
        },
        {
          feed: "Today we played a ping pong game. You had to be able to blow hard for this, but luckily this worked out pretty well. Not only did the ball go neatly from glass to glass, but the water also jumped in all directions. After lunch we went to make a lion with paint. They turned out very beautiful, but probably still too wet to take home. Don't forget to take it home with you next week?",
          imageUrl:
            "https://filedn.com/lNoARe6kYwfHEYXrn4wlGAR/doodles/feed2.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
          childId: 1,
          teacherId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("feeds", null, {});
  },
};
