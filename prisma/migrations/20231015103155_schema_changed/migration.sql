/*
  Warnings:

  - Made the column `firstName` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `profiles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "profiles" ALTER COLUMN "firstName" SET NOT NULL,
ALTER COLUMN "lastName" SET NOT NULL;
