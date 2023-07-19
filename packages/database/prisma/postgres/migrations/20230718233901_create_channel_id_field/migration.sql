/*
  Warnings:

  - You are about to drop the column `channel_id` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `budgets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "channel_id",
DROP COLUMN "status";

-- AlterTable
ALTER TABLE "solicitations" ADD COLUMN     "channel_id" TEXT;

-- DropEnum
DROP TYPE "BudgetStatus";
