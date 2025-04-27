import express, { RequestHandler } from "express";
import createUser from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser as RequestHandler);

export default router;
