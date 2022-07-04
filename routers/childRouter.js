//Import the Router class from express.
const { Router } = require("express");
const Child = require("../models").child;
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const { toData } = require("../auth/jwt");

//Create a new Router instance.
const router = new Router();

//Register a GET endpoint on the / route that sends 'separated' as the response.
// router.get("/", (request, response) => response.send(response.data));

//Get all Child
//step1: define asyn with Route
router.get("/", async (request, response, next) => {
  try {
    // strp 2: define a variable (spaces) and find all
    const allChildren = await Child.findAll();
    console.log(allChildren);
    // step 3:  send the newly find space as a response
    response.send(allChildren);
    //ste 4: test it with httpie: http :4000/spaces
  } catch (error) {
    console.log("error from child router: ", error.message);
    next(error);
  }
});

//npx nodemon index.js

//Export the router.

module.exports = router;
