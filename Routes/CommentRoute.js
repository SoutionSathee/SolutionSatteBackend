import express from "express";
const router = express.Router();
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";
import {
  createCommentForLead,
  getCommentByLeadid,
} from "../Controllers/CommentCtrl.js";

router.post("/addcommenttolead", employeeTokenCheck, createCommentForLead);

router.get("/getcommentoflead", employeeTokenCheck, getCommentByLeadid);


export default router