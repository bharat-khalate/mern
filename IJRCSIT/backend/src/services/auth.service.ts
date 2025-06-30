import { prisma } from "../db/dbConfig";
import { RegisterRequets, LoginRequest } from "../types/auth.types";
import bcrypt from "bcrypt";
import { logger } from "../utils/logging";
import { sign } from "jsonwebtoken";
import { signToken } from "../utils/jwt";

export async function registerUser(user: RegisterRequets) {
    try {
        const userInDb = await prisma.user.findFirst({
            where: { email: user.email }
        })
        if (userInDb) {
            throw new Error("User Already Exists")
        }
        const hash = await bcrypt.hash(user.pssword, 10)
        const data = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: hash,
                type: "USER"
            }
        })
        return { email: data.email, id: data.userId }
    } catch (e) {
        logger.error(e)
        throw e;
    }
}

export async function loginUser(credentials: LoginRequest) {
    try {
        const user = await prisma.user.findFirst({
            where: { email: credentials.email }
        })
        if (!user) throw new Error("Wrong email id");
        if (!await bcrypt.compare(credentials.password, user.password)) throw new Error("Wrong Password");
        return signToken({
            id: user.userId,
            email: user.email,
            name: user.name,
            role: user.type
        })
    } catch (e) {
        logger.error(e)
        throw e;
    }
}