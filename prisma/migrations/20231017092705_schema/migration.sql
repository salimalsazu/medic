/*
  Warnings:

  - The values [cancelled] on the enum `appointmentStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "appointmentStatus_new" AS ENUM ('pending', 'approved', 'rejected');
ALTER TABLE "appointment_bookings" ALTER COLUMN "appointmentStatus" DROP DEFAULT;
ALTER TABLE "appointment_bookings" ALTER COLUMN "appointmentStatus" TYPE "appointmentStatus_new" USING ("appointmentStatus"::text::"appointmentStatus_new");
ALTER TYPE "appointmentStatus" RENAME TO "appointmentStatus_old";
ALTER TYPE "appointmentStatus_new" RENAME TO "appointmentStatus";
DROP TYPE "appointmentStatus_old";
ALTER TABLE "appointment_bookings" ALTER COLUMN "appointmentStatus" SET DEFAULT 'pending';
COMMIT;
