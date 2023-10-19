/*
  Warnings:

  - You are about to drop the column `profileId` on the `feedback_forms` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `feedback_forms` table. All the data in the column will be lost.
  - Added the required column `conatctNumber` to the `feedback_forms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `feedback_forms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `feedback_forms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "feedback_forms" DROP CONSTRAINT "feedback_forms_profileId_fkey";

-- DropForeignKey
ALTER TABLE "feedback_forms" DROP CONSTRAINT "feedback_forms_serviceId_fkey";

-- AlterTable
ALTER TABLE "feedback_forms" DROP COLUMN "profileId",
DROP COLUMN "serviceId",
ADD COLUMN     "conatctNumber" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;
