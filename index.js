const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();

const app = express();
mongoose.connect(process.env.MONGODB_URL);
const port = 5000;
app.use(cors());
app.use(cookieParser());
app.use(express.json());
//Routes
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.listen(port, () => {
  console.log("Server is running " + port);
});
