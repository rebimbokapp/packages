/*
  Warnings:

  - Made the column `price` on table `budgets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `details` on table `budgets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `delivery_price` on table `budgets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `delivery_time_in_hours` on table `budgets` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "budgets" ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "details" SET NOT NULL,
ALTER COLUMN "delivery_price" SET NOT NULL,
ALTER COLUMN "delivery_time_in_hours" SET NOT NULL;
