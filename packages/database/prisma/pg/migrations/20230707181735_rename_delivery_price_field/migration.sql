/*
  Warnings:

  - You are about to drop the column `delivery_rrice` on the `budgets` table. All the data in the column will be lost.
  - Added the required column `delivery_price` to the `budgets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "delivery_rrice",
ADD COLUMN     "delivery_price" DECIMAL(65,30) NOT NULL;
