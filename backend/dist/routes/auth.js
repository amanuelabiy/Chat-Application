"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const protectRoute_1 = __importDefault(require("../middleware/protectRoute"));
const router = express_1.default.Router();
router.get("/getAuthenticatedUser", protectRoute_1.default, authController_1.getAuthenticatedUser);
router.post("/login", authController_1.login);
router.post("/logout", authController_1.logout);
router.post("/signup", authController_1.signup);
exports.default = router;
