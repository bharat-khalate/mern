import { Router } from "express";
import { getProfile, uploadThesis } from "../controllers/user.controller";
import { authenticateUser } from "../middleware/auth.middleware";
import { upload } from "../utils/upload";


const router = Router();

router.get("/profile", authenticateUser, getProfile);
router.post("/upload/thesis", authenticateUser, upload.single("file"), uploadThesis);




export default router;