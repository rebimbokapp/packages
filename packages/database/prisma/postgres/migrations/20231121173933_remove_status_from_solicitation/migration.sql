/*
  Warnings:

  - You are about to drop the column `status` on the `solicitations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "solicitations" DROP COLUMN "status";

-- DropEnum
DROP TYPE "SolicitationStatus";
