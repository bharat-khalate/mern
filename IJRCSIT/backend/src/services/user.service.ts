import { UserType } from "../../generated/prisma";
import { prisma } from "../db/dbConfig";


export async function getUserByUserId(userId: number) {
    const user = await prisma.user.findUnique({
        where: { userId },
        select: {
            userId: true,
            email: true,
            type: true
        }
    })
    return user;
}



export async function submitThesis(data: {
  title: string;
  abstract: string;
  primaryAuthor: string;
  file: string;
  volumeId: number;
  uploadedBy: number;
  authors: { name: string }[];
}) {
  return await prisma.thesis.create({
    data: {
      title: data.title,
      abstract: data.abstract,
      primaryAuthor: data.primaryAuthor,
      file: data.file,
      volumeId: data.volumeId,
      uploadedBy: data.uploadedBy,
      actionDate: new Date(), // ✅ required field
      authors: {
        create: data.authors,
      },
    },
    include: {
      authors: true,
    },
  });
}
