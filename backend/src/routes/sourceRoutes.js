import express from "express";
import {
  getAllSource,
  addSource,
  deleteSource,
} from "../controllers/sourceController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllSource);
router.post("/", verifyToken, addSource);
router.delete("/:id", verifyToken, deleteSource);

export default router;
