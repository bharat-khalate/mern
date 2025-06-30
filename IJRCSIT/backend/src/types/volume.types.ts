export interface Volume {
    volumeId?: number,
    name: string
}

export interface Issue {
    issueId: number,
    startDate: Date,
    endDate: Date,
    volumeId: number
}