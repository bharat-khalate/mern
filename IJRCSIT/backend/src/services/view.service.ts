import { prisma } from "../db/dbConfig";
import { Status } from "@prisma/client";

export async function getAllVolumesService() {
    return await prisma.volume.findMany({
        include: {
            issues: true,
        },
    });
}

export async function getThesisByVolumeIdService(volumeId: number) {
    return await prisma.thesis.findMany({
        where: {
            volumeId,
            status: "ACCEPTED",
        },
        include: {
            authors: true,
            user: {
                select: { name: true },
            },
        },
    });
}
