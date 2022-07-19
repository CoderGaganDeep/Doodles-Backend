//Import the Router class from express.
const { Router } = require("express");
const Teacher = require("../models").teacher;

const { toData } = require("../auth/jwt");

//Create a new Router instance.
const router = new Router();

//Get all Teachers
//step1: define asyn with Route
router.get("/", async (request, response, next) => {
  try {
    // strp 2: define a variable (teacher) and find all
    const allTeachers = await Teacher.findAll();
    console.log(allTeachers);
    // step 3:  send the newly find space as a response
    response.send(allTeachers);
    //ste 4: test it with httpie: http :4000/spaces
  } catch (error) {
    console.log("error from allTeachers router: ", error.message);
    next(error);
  }
});

//npx nodemon index.js

//Export the router.

module.exports = router;
