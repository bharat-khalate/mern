import { Router } from "express";
import {
    createVolume,
    createIssue,
    updateVolume,
    takeActionOnThesis,
} from "../controllers/volume.controller";
import { authenticateUser } from "../middleware/auth.middleware";

const router = Router();

// Protected by admin authentication
router.post("/volume/create", authenticateUser, createVolume);
router.post("/volume/createIssue", authenticateUser, createIssue);
router.put("/volume/edit", authenticateUser, updateVolume);
router.put("/action/:thesisId", authenticateUser, takeActionOnThesis);

export default router;
