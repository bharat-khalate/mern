import { Request, Response } from "express";
import { getUserByUserId, submitThesis } from "../services/user.service";
import { GenericSuccesResponse } from "../types/GenericTypes";
import { logger } from "../utils/logging";

export async function getProfile(request: Request, response: Response) {
    const userId: number | undefined = (request as any)?.user?.userId;

    if (!userId) {
        response.status(401).json({
            success: false,
            message: "Failed to get profile",
            error: "Unable to find userId"
        });
    }

    try {
        const user = await getUserByUserId(userId || 0);
        if (!user) throw new Error("User not found with userId " + userId);

        const resData: GenericSuccesResponse<any> = {
            success: true,
            message: "User found",
            data: Array(user),
        };

        response.status(200).json(resData);
    } catch (e: any) {
        logger.error(e.message);
        response.status(401).json({
            success: false,
            message: "Failed to get profile",
            error: e.message || "No such user exists"
        });
    }
}




export async function uploadThesis(req: Request, res: Response) {
    try {
        const userId = (req as any).user?.userId;
        const file = req.file;

        if (!file) {
            res.status(400).json({ success: false, message: "File is required" });
        }

        const thesis = await submitThesis({
            ...req.body,
            uploadedBy: userId,
            file: file?.filename,
        });

        res.status(201).json({ success: true, thesis });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}




