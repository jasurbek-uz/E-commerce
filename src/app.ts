import express from "express";  // call express
import path from "path"; // call path


//Entrance
const app = express(); // create express app
app.use(express.static(path.join(__dirname, "public"))); // serve static files
app.use(express.json()); // parse JSON body
app.use(express.urlencoded({ extended: true }));  // parse URL-encoded body

// session

// frontend 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); 

// routes

export default app; // export app

