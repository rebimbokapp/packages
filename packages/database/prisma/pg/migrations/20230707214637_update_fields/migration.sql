/*
  Warnings:

  - You are about to alter the column `price` on the `budgets` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `delivery_price` on the `budgets` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "budgets" ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "delivery_price" SET DATA TYPE INTEGER;
