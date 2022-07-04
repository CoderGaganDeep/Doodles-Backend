//packages
const express = require("express");
const corsMiddleWare = require("cors");
const childRouter = require("./routers/childRouter");
const teacherRouter = require("./routers/teacherRouter");
const feedRouter = require("./routers/feedRouter");
const userRouter = require("./routers/userRouter");

//routers
const authRouter = require("./routers/auth");

//constants
const { PORT } = require("./config/constants");

// Create an express app
const app = express();

// CORS middleware:  * Since our api is hosted on a different domain than our client
// we are are doing "Cross Origin Resource Sharing" (cors)
// Cross origin resource sharing is disabled by express by default
app.use(corsMiddleWare());

// express.json() to be able to read request bodies of JSON requests a.k.a. body-parser
app.use(express.json());

//routes
app.use("/auth", authRouter);
app.use("/child", childRouter);
app.use("/teacher", teacherRouter);
app.use("/feed", feedRouter);
app.use("/user", userRouter);

//start listening
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
