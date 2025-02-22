const router = express.Router();
import express from "express";
import authcontroller from "./controllers/auth.controller";

router.get("/", authcontroller.home);
router.get("/login", authcontroller.login);
router.get("/signup", authcontroller.signup);
router.post("/logout", authcontroller.logout);
router.post("/")


export default router;