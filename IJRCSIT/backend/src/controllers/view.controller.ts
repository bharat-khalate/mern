import { Request, Response } from "express";
import {
  getAllVolumesService,
  getThesisByVolumeIdService,
} from "../services/view.service";

export async function getAllVolumes(req: Request, res: Response) {
  try {
    const volumes = await getAllVolumesService();
    res.json({ success: true, volumes });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function getThesisByVolumeId(req: Request, res: Response) {
  try {
    const volumeId = parseInt(req.params.volId);
    const theses = await getThesisByVolumeIdService(volumeId);
    res.json({ success: true, theses });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
}
