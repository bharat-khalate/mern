import { prisma } from "../db/dbConfig";



enum Status {
    ACCEPTED,
    REJECTED,
    PENDING,
    REVIEW
}

export async function createVolumeService(data: { volName: string }) {
    return await prisma.volume.create({
        data: {
            volName: data.volName,
        },
    });
}

export async function createIssueService(data: { volumeId: number; endDate?: Date }) {
    return await prisma.issues.create({
        data: {
            volumeId: data.volumeId,
            endDate: data.endDate,
        },
    });
}

export async function updateVolumeService(data: { volumeId: number; volName: string }) {
    return await prisma.volume.update({
        where: { volumeId: data.volumeId },
        data: { volName: data.volName },
    });
}

export async function takeActionService(
    thesisId: number,
    status: Status,
    remarks: string
) {
    const updatedThesis = await prisma.thesis.update({
        where: { thesisId },
        data: {  actionDate: new Date() },
    });

    const action = await prisma.action.upsert({
        where: { thesisId },
        update: { remarks },
        create: { thesisId, remarks },
    });

    return { updatedThesis, action };
}
