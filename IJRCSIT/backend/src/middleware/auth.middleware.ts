import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { GenericErrorResponse } from "../types/GenericTypes";


export function authenticateUser(req: Request, res: Response, next: NextFunction) {
    const authHeader: string | undefined = req.headers['authorization'];

    const token: string | undefined = authHeader?.split(" ")[1]

    if (!token) res.status(403).json({
        success: false,
        message: "un authenticated user",
        error: "token is missing"
    });

    try {
        const decoded = verifyToken(token + "");
        (req as any).user = decoded
        next();
    } catch (e: any) {
        res.status(403).json({
            success: false,
            message: "un authenticated user",
            error: "token is invalid or expired"
        });

    }
}