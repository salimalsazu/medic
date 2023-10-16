/*
  Warnings:

  - Changed the type of `serviceStatus` on the `services` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "chooseServiceStatus" AS ENUM ('Available', 'Upcoming', 'Rejected');

-- AlterTable
ALTER TABLE "services" DROP COLUMN "serviceStatus",
ADD COLUMN     "serviceStatus" "chooseServiceStatus" NOT NULL;

-- DropEnum
DROP TYPE "serviceStatus";
