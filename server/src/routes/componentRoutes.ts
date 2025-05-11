import express, { RequestHandler } from "express";
import {
  createComponent,
  deleteComponentById,
  getAllComponents,
  getComponentById,
} from "../controllers/componentController.js";

const router = express.Router();

// POST /api/components 
// GET /api/components?page=1&limit=20 
// GET /api/components/680f5617cd4c1f69c459a098 
// DELETE /api/components/680f5617cd4c1f69c459a098 

router.post("/", createComponent as RequestHandler);
router.get("/", getAllComponents as RequestHandler);
router.get("/:id", getComponentById as RequestHandler);
router.delete("/:id", deleteComponentById as RequestHandler);

export default router;
