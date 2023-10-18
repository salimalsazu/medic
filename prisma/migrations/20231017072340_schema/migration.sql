/*
  Warnings:

  - Added the required column `slotId` to the `appointment_bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "appointment_bookings" ADD COLUMN     "slotId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "appointment_bookings" ADD CONSTRAINT "appointment_bookings_slotId_fkey" FOREIGN KEY ("slotId") REFERENCES "time_slots"("slotId") ON DELETE RESTRICT ON UPDATE CASCADE;
