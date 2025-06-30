export interface RegisterRequets {
    name: string,
    pssword: string,
    type: "USER" | "ADMIN"
    email: string
}


export interface LoginRequest {
    email: string,
    password: string
}