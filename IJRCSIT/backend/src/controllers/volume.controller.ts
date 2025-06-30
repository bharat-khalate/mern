import { Request, Response } from "express";
import {
  createVolumeService,
  createIssueService,
  updateVolumeService,
  takeActionService,
} from "../services/volume.service";

export async function createVolume(req: Request, res: Response) {
  try {
    const result = await createVolumeService(req.body);
    res.status(201).json({ success: true, volume: result });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function createIssue(req: Request, res: Response) {
  try {
    const result = await createIssueService(req.body);
    res.status(201).json({ success: true, issue: result });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function updateVolume(req: Request, res: Response) {
  try {
    const result = await updateVolumeService(req.body);
    res.json({ success: true, volume: result });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function takeActionOnThesis(req: Request, res: Response) {
  try {
    const thesisId = parseInt(req.params.thesisId);
    const { status, remarks } = req.body;
    const result = await takeActionService(thesisId, status, remarks);
    res.json({ success: true, updated: result });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}
