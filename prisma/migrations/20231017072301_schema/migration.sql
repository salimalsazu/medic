/*
  Warnings:

  - You are about to drop the column `slotId` on the `appointment_bookings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "appointment_bookings" DROP CONSTRAINT "appointment_bookings_slotId_fkey";

-- AlterTable
ALTER TABLE "appointment_bookings" DROP COLUMN "slotId";
