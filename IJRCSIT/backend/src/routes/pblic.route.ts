import { Router } from "express";
import {
  getAllVolumes,
  getThesisByVolumeId,
} from "../controllers/view.controller";

const router = Router();

router.get("/allvol", getAllVolumes);
router.get("/getThesisByVolId/:volId", getThesisByVolumeId);

export default router;
