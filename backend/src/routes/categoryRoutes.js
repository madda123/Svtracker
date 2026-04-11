import express from "express";
import {
  getAllCategory,
  addCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllCategory);
router.post("/", verifyToken, addCategory);
router.delete("/:id", verifyToken, deleteCategory);

export default router;
