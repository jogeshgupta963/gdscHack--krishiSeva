const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();

//functions

const connect = require("./server/dbConnection/connect");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/css", express.static(__dirname + "/client/components/css"));
app.use("/js", express.static(__dirname + "/client/components/js"));
app.use("/img", express.static(__dirname + "/client/images"));
//routers
const userRouter = require("./server/routers/user.js");
const farmerRouter = require("./server/routers/farmer.js");

app.use("/api/v1/user", userRouter);
app.use("/api/v1/farmer", farmerRouter);

//db connection
app.get("/api/v1/index", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/index.html"));
});
app.get("/api/v1/farmer/collaborate", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/collaborate.html"));
});

(async function () {
  try {
    await connect(process.env.mongoUri);
    console.log("db connected");
    app.listen(process.env.port || 3000, () => {
      console.log("server started");
    });
  } catch (err) {
    console.log(err.message);
  }
})();
