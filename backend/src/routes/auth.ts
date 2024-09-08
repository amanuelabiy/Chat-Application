import express from "express";
import {
  login,
  logout,
  signup,
  getAuthenticatedUser,
} from "../controllers/authController";
import protectRoute from "../middleware/protectRoute";

const router = express.Router();

router.get("/getAuthenticatedUser", protectRoute, getAuthenticatedUser);

router.post("/login", login);

router.post("/logout", logout);

router.post("/signup", signup);

export default router;
