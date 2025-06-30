
export interface GenericSuccesResponse<T> {
    success: boolean,
    message: string,
    data: T[]
}

export interface GenericErrorResponse {
    success: boolean,
    message: string,
    error: string
}