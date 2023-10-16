/*
  Warnings:

  - The values [available,upcoming,rejected] on the enum `serviceStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "serviceStatus_new" AS ENUM ('Available', 'Upcoming', 'Rejected');
ALTER TABLE "services" ALTER COLUMN "serviceStatus" DROP DEFAULT;
ALTER TABLE "services" ALTER COLUMN "serviceStatus" TYPE "serviceStatus_new" USING ("serviceStatus"::text::"serviceStatus_new");
ALTER TYPE "serviceStatus" RENAME TO "serviceStatus_old";
ALTER TYPE "serviceStatus_new" RENAME TO "serviceStatus";
DROP TYPE "serviceStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "serviceStatus" DROP DEFAULT;
