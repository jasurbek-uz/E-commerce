console.log("Server is running");
import dotenv from "dotenv";
dotenv.config();
import app from "../src/app";

import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongooDb connection succeed");
    const PORT = process.env.PORT ?? 3003; // default port to listen
    app.listen(PORT, function () { console.log("Server is running on port") })}) // start the Express server 
  .catch((err)=> console.log("Error connecting to MongoDb"))
