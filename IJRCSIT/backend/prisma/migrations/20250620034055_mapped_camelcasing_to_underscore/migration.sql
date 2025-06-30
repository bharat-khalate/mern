/*
  Warnings:

  - You are about to drop the column `thesisId` on the `Action` table. All the data in the column will be lost.
  - The primary key for the `Author` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `thesisId` on the `Author` table. All the data in the column will be lost.
  - The primary key for the `Issues` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `endDate` on the `Issues` table. All the data in the column will be lost.
  - You are about to drop the column `issueId` on the `Issues` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Issues` table. All the data in the column will be lost.
  - You are about to drop the column `volumeId` on the `Issues` table. All the data in the column will be lost.
  - The primary key for the `Thesis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `actionDate` on the `Thesis` table. All the data in the column will be lost.
  - You are about to drop the column `primaryAuthor` on the `Thesis` table. All the data in the column will be lost.
  - You are about to drop the column `thesisId` on the `Thesis` table. All the data in the column will be lost.
  - You are about to drop the column `uploadedBy` on the `Thesis` table. All the data in the column will be lost.
  - You are about to drop the column `volumeId` on the `Thesis` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - The primary key for the `Volume` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `volName` on the `Volume` table. All the data in the column will be lost.
  - You are about to drop the column `volumeId` on the `Volume` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[thesis_id]` on the table `Action` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `thesis_id` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thesis_id` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume_id` to the `Issues` table without a default value. This is not possible if the table is not empty.
  - Added the required column `action_date` to the `Thesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primary_author` to the `Thesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uploaded_by` to the `Thesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume_id` to the `Thesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vol_name` to the `Volume` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_thesisId_fkey";

-- DropForeignKey
ALTER TABLE "Author" DROP CONSTRAINT "Author_thesisId_fkey";

-- DropForeignKey
ALTER TABLE "Issues" DROP CONSTRAINT "Issues_volumeId_fkey";

-- DropForeignKey
ALTER TABLE "Thesis" DROP CONSTRAINT "Thesis_uploadedBy_fkey";

-- DropForeignKey
ALTER TABLE "Thesis" DROP CONSTRAINT "Thesis_volumeId_fkey";

-- DropIndex
DROP INDEX "Action_thesisId_key";

-- AlterTable
ALTER TABLE "Action" DROP COLUMN "thesisId",
ADD COLUMN     "thesis_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Author" DROP CONSTRAINT "Author_pkey",
DROP COLUMN "authorId",
DROP COLUMN "thesisId",
ADD COLUMN     "author_id" SERIAL NOT NULL,
ADD COLUMN     "thesis_id" INTEGER NOT NULL,
ADD CONSTRAINT "Author_pkey" PRIMARY KEY ("author_id");

-- AlterTable
ALTER TABLE "Issues" DROP CONSTRAINT "Issues_pkey",
DROP COLUMN "endDate",
DROP COLUMN "issueId",
DROP COLUMN "startDate",
DROP COLUMN "volumeId",
ADD COLUMN     "end_date" TIMESTAMP(3),
ADD COLUMN     "issue_id" SERIAL NOT NULL,
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "volume_id" INTEGER NOT NULL,
ADD CONSTRAINT "Issues_pkey" PRIMARY KEY ("issue_id");

-- AlterTable
ALTER TABLE "Thesis" DROP CONSTRAINT "Thesis_pkey",
DROP COLUMN "actionDate",
DROP COLUMN "primaryAuthor",
DROP COLUMN "thesisId",
DROP COLUMN "uploadedBy",
DROP COLUMN "volumeId",
ADD COLUMN     "action_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "primary_author" TEXT NOT NULL,
ADD COLUMN     "thesis_id" SERIAL NOT NULL,
ADD COLUMN     "uploaded_by" INTEGER NOT NULL,
ADD COLUMN     "volume_id" INTEGER NOT NULL,
ADD CONSTRAINT "Thesis_pkey" PRIMARY KEY ("thesis_id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "userId",
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- AlterTable
ALTER TABLE "Volume" DROP CONSTRAINT "Volume_pkey",
DROP COLUMN "volName",
DROP COLUMN "volumeId",
ADD COLUMN     "vol_name" TEXT NOT NULL,
ADD COLUMN     "volume_id" SERIAL NOT NULL,
ADD CONSTRAINT "Volume_pkey" PRIMARY KEY ("volume_id");

-- CreateIndex
CREATE UNIQUE INDEX "Action_thesis_id_key" ON "Action"("thesis_id");

-- AddForeignKey
ALTER TABLE "Thesis" ADD CONSTRAINT "Thesis_volume_id_fkey" FOREIGN KEY ("volume_id") REFERENCES "Volume"("volume_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thesis" ADD CONSTRAINT "Thesis_uploaded_by_fkey" FOREIGN KEY ("uploaded_by") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issues" ADD CONSTRAINT "Issues_volume_id_fkey" FOREIGN KEY ("volume_id") REFERENCES "Volume"("volume_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Author" ADD CONSTRAINT "Author_thesis_id_fkey" FOREIGN KEY ("thesis_id") REFERENCES "Thesis"("thesis_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_thesis_id_fkey" FOREIGN KEY ("thesis_id") REFERENCES "Thesis"("thesis_id") ON DELETE RESTRICT ON UPDATE CASCADE;
