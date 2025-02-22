import { T } from "../types/common"
import {Request, Response} from "express"
const authController: T = {};

authController.home = (req: Request, res: Response) => {
  try {
    res.send("Home page");
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
};





authController.register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


authController.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await.

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
    export default authController;