//Import the Router class from express.
const { Router } = require("express");
const Child = require("../models").child;
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const { toData } = require("../auth/jwt");

const router = new Router();

// get all children
router.get("/", async (request, response, next) => {
  try {
    const allChildren = await Child.findAll();
    console.log(allChildren);

    response.send(allChildren);
  } catch (error) {
    console.log("error from child router: ", error.message);
    next(error);
  }
});

// get child by id --- http -v localhost:4000/child/1
router.get("/:id", async (request, response, next) => {
  try {
    console.log("IN NETHOD");
    const { id } = request.params;
    const childById = await Child.findByPk(id);
    response.send(childById);
  } catch (error) {
    console.log("error from child by id: ", error.message);
    next(error);
  }
});

// add new child
// http -v PUT :4000/child/4 name="baby" age="2" branch="a" group="s"
router.post("/", async (request, response, next) => {
  try {
    const { name, age, branch, group } = request.body; // send the name and userId on thunks to create the mySpace:
    const newChild = await Child.create({
      name: `${name}'s added`,
      age: age,
      branch: branch,
      group: group,
      userId: User.id,
    });
    response.send(newChild);
  } catch (error) {
    console.log("error from myChild: ", error.message);
    next(error);
  }
});
//npx nodemon index.js

//Export the router.

module.exports = router;
