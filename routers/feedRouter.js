//Import the Router class from express.
const { Router } = require("express");
const Feed = require("../models").feed;
const User = require("../models").user;
const Child = require("../models").child;
const authMiddleware = require("../auth/middleware");

const { toData } = require("../auth/jwt");

//Create a new Router instance.
const router = new Router();

//Get all Feeds
//step1: define asyn with Route
router.get("/", async (request, response, next) => {
  try {
    // strp 2: define a variable (teacher) and find all
    const allFeeds = await Feed.findAll();
    console.log(allFeeds);
    // step 3:  send the newly find space as a response
    response.send(allFeeds);
    //ste 4: test it with httpie: http :4000/spaces
  } catch (error) {
    console.log("error from allFeeds router: ", error.message);
    next(error);
  }
});

// get Feed by id --- http -v localhost:4000/feed/1
router.get("/myChild", authMiddleware, async (request, response, next) => {
  try {
    console.log("IN NETHOD");
    const { id } = request.user.dataValues;
    // const feedById = await User.findByPk(id, {
    //   include: [
    //     {
    //       model: Child,
    //       include: [Feed],
    //     },
    //   ],
    //   attributes: { exclude: ["password"] },
    // });

    const feedById = await Child.findAll({
      where: { userId: id },
      include: [Feed],
    });
    response.send(feedById);
  } catch (error) {
    console.log("error from feed by id: ", error.message);
    next(error);
  }
});

// add new feed
// http -v POST :4000/feed feed="baby" imageUrl="dhhoe.com" childId=6 teacherId=3
router.post("/", async (request, response, next) => {
  try {
    const { feed, imageUrl, childId } = request.body; // send the name and userId on thunks to create the mySpace:
    const newFeed = await Feed.create({
      feed: `${feed}`,
      imageUrl: imageUrl,
      childId: childId,
    });
    response.send(newFeed);
  } catch (error) {
    console.log("error from newFeed: ", error.message);
    next(error);
  }
});
//npx nodemon index.js

module.exports = router;
