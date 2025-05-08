import express, { RequestHandler } from "express";
import {
  createComponent,
  getAllComponents,
  getComponentById,
} from "../controllers/componentController.js";

const router = express.Router();

// POST /api/components -> Create a new component
router.post("/", createComponent as RequestHandler);

// GET /api/components?page=1&limit=20 -> Get paginated list of components
router.get("/", getAllComponents as RequestHandler);
router.get("/:id", getComponentById as RequestHandler);

export default router;
