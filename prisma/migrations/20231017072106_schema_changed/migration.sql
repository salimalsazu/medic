/*
  Warnings:

  - You are about to drop the column `endTime` on the `time_slots` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `time_slots` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slotTime]` on the table `time_slots` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slotTime` to the `time_slots` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "time_slots_endTime_key";

-- DropIndex
DROP INDEX "time_slots_startTime_key";

-- AlterTable
ALTER TABLE "time_slots" DROP COLUMN "endTime",
DROP COLUMN "startTime",
ADD COLUMN     "slotTime" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "time_slots_slotTime_key" ON "time_slots"("slotTime");
