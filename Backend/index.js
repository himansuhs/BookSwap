import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import cors from "cors";
import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const port = process.env.port || 5500;
const uri = process.env.MONGODBURI;
//connect to mongodb   //mongoose has connect method which will used to connect db
try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongodb");
} catch (error) {
  console.log("error", error);
}

// define route

// jab /book wale route wale pe aye tho ye chale
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
