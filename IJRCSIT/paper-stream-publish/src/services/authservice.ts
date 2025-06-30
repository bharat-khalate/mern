import useLocalStorage from "@/hooks/useLocalStorage"
import api from "../utils/interceptor"


export interface LoginData {
    email: string,
    password: string,
}

export interface RegisterData {
    email: string,
    name: string,
    password: string,
}


interface GenricResponseType<T> {
    success: boolean,
    data: T[],
    message: string
}

interface AuthServiceType {
    login: (logData: LoginData) => Promise<any>,
    register: (regData: RegisterData) => Promise<any>
}

const useAuthService = () => {
    const service: AuthServiceType = {
        login: async (logData: LoginData) => {
            try {
                const res = await api.post<GenricResponseType<any[]>>("/login", logData);
                return res.data.data;
            } catch (error: any) {
                console.error(error)
                throw error;
            }
        },
        register: async (regData: RegisterData) => {
            try {
                const res = await api.post<GenricResponseType<any>>("/register", regData)
                
            } catch (e: any) {
                console.error(e)
                throw e;
            }
        }
    };
    return service;
}

export default useAuthService;