/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACCEPTED', 'REJECTED', 'PENDING', 'REVIEW');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "email",
DROP COLUMN "id",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "type" "UserType" NOT NULL DEFAULT 'USER',
ADD COLUMN     "userId" SERIAL NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "Thesis" (
    "thesisId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "abstract" TEXT NOT NULL,
    "primaryAuthor" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "volumeId" INTEGER NOT NULL,
    "actionDate" TIMESTAMP(3) NOT NULL,
    "uploadedBy" INTEGER NOT NULL,

    CONSTRAINT "Thesis_pkey" PRIMARY KEY ("thesisId")
);

-- CreateTable
CREATE TABLE "Volume" (
    "volumeId" SERIAL NOT NULL,
    "volName" TEXT NOT NULL,

    CONSTRAINT "Volume_pkey" PRIMARY KEY ("volumeId")
);

-- CreateTable
CREATE TABLE "Issues" (
    "issueId" SERIAL NOT NULL,
    "volumeId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),

    CONSTRAINT "Issues_pkey" PRIMARY KEY ("issueId")
);

-- CreateTable
CREATE TABLE "Author" (
    "authorId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "thesisId" INTEGER NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("authorId")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "thesisId" INTEGER NOT NULL,
    "remarks" TEXT NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Action_thesisId_key" ON "Action"("thesisId");

-- AddForeignKey
ALTER TABLE "Thesis" ADD CONSTRAINT "Thesis_volumeId_fkey" FOREIGN KEY ("volumeId") REFERENCES "Volume"("volumeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thesis" ADD CONSTRAINT "Thesis_uploadedBy_fkey" FOREIGN KEY ("uploadedBy") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issues" ADD CONSTRAINT "Issues_volumeId_fkey" FOREIGN KEY ("volumeId") REFERENCES "Volume"("volumeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Author" ADD CONSTRAINT "Author_thesisId_fkey" FOREIGN KEY ("thesisId") REFERENCES "Thesis"("thesisId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_thesisId_fkey" FOREIGN KEY ("thesisId") REFERENCES "Thesis"("thesisId") ON DELETE RESTRICT ON UPDATE CASCADE;
