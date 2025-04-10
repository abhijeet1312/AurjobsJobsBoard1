import express from "express";
import { generateResumePdf } from "../controllers/resume-controller.js";




const router = express.Router();
router.post("/generate-pdf", generateResumePdf);

export default router;