/*
  Warnings:

  - Changed the type of `delivery_time_in_hours` on the `budgets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "delivery_time_in_hours",
ADD COLUMN     "delivery_time_in_hours" INTEGER NOT NULL;
