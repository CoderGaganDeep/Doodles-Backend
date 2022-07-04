//Import the Router class from express.
const { Router } = require("express");
const User = require("../models").user;

const { toData } = require("../auth/jwt");

const router = new Router();

router.get("/", async (request, response, next) => {
  try {
    const allUsers = await User.findAll();
    console.log(allUsers);
    response.send(allUsers);
  } catch (error) {
    console.log("error from allUsers router: ", error.message);
    next(error);
  }
});

//npx nodemon index.js

module.exports = router;
