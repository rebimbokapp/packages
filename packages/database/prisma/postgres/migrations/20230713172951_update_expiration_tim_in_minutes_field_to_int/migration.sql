/*
  Warnings:

  - Changed the type of `expiration_time_in_minutes` on the `validations` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "validations" DROP COLUMN "expiration_time_in_minutes",
ADD COLUMN     "expiration_time_in_minutes" INTEGER NOT NULL;
