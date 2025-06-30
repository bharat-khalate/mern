import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function signToken(payLoad: object): string {
    return jwt.sign(payLoad, JWT_SECRET, { expiresIn: "1d" })
}

export function verifyToken(token: string): any {
    return jwt.verify(token, JWT_SECRET);
}