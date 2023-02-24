import express from "express";
import {getFeedPost,getUserPost,likePost} from "../controllers/PostController.js";
import { verifyToken } from "../middleware/auth.js";
const router=express.Router();

router.get("/",verifyToken,getFeedPost);
router.get("/:userId/post",verifyToken,getUserPost);
router.get("/:id/like",verifyToken,likePost);
export default router;