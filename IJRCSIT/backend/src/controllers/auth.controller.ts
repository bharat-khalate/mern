import { Request, Response } from "express";
import { LoginRequest, RegisterRequets } from "../types/auth.types";
import { loginUser, registerUser } from "../services/auth.service";
import { GenericErrorResponse, GenericSuccesResponse } from "../types/GenericTypes";
import { logger } from "../utils/logging";



export async function handleRegister(request: Request, response: Response) {
    try {
        const userData: RegisterRequets = request.body;
        const resData: GenericSuccesResponse<any> = {
            success: true,
            data: Array(registerUser(userData)),
            message: "user created Successfully"
        };
        response.status(200).json(resData);
    } catch (e: any) {
        const resData: GenericErrorResponse = {
            success: false,
            message: "failed to create user",
            error: e?.message
        }
        logger.error(e)
        response.status(400).json(resData)
    }

}

export async function handleLogin(request: Request, response: Response) {
    try {
        const credentials: LoginRequest = request.body;
        const resData: GenericSuccesResponse<any> = {
            success: true,
            message: "logged in successfully",
            data: Array(loginUser(credentials))
        }
        response.status(200).json(resData);

    } catch (e: any) {
        logger.error(e)
        const resData: GenericErrorResponse = {
            success: false,
            message: "failed to login",
            error: e.message
        }
        response.status(400).json(resData);
    }

}