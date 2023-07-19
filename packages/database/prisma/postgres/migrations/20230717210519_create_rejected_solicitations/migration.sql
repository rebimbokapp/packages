-- CreateEnum
CREATE TYPE "SolicitationStatus" AS ENUM ('PENDING', 'ACCEPTED');

-- AlterTable
ALTER TABLE "budgets" ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "details" DROP NOT NULL,
ALTER COLUMN "delivery_price" DROP NOT NULL,
ALTER COLUMN "delivery_time_in_hours" DROP NOT NULL;

-- AlterTable
ALTER TABLE "solicitations" ADD COLUMN     "status" "SolicitationStatus" NOT NULL DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "_rejected_solicitations" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_rejected_solicitations_AB_unique" ON "_rejected_solicitations"("A", "B");

-- CreateIndex
CREATE INDEX "_rejected_solicitations_B_index" ON "_rejected_solicitations"("B");

-- AddForeignKey
ALTER TABLE "_rejected_solicitations" ADD CONSTRAINT "_rejected_solicitations_A_fkey" FOREIGN KEY ("A") REFERENCES "solicitations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_rejected_solicitations" ADD CONSTRAINT "_rejected_solicitations_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
