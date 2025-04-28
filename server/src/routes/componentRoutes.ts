import express, { RequestHandler } from "express";
import createComponent from "../controllers/componentController.js";

const router = express.Router();

router.post("/", createComponent as RequestHandler);

export default router;
