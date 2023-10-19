/*
  Warnings:

  - You are about to drop the column `conatctNumber` on the `feedback_forms` table. All the data in the column will be lost.
  - Added the required column `contactNumber` to the `feedback_forms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "feedback_forms" DROP COLUMN "conatctNumber",
ADD COLUMN     "contactNumber" TEXT NOT NULL;
