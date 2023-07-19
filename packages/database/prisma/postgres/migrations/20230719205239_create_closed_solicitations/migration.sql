-- AlterEnum
ALTER TYPE "SolicitationStatus" ADD VALUE 'CLOSED';

-- CreateTable
CREATE TABLE "_closed_solicitations" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_closed_solicitations_AB_unique" ON "_closed_solicitations"("A", "B");

-- CreateIndex
CREATE INDEX "_closed_solicitations_B_index" ON "_closed_solicitations"("B");

-- AddForeignKey
ALTER TABLE "_closed_solicitations" ADD CONSTRAINT "_closed_solicitations_A_fkey" FOREIGN KEY ("A") REFERENCES "solicitations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_closed_solicitations" ADD CONSTRAINT "_closed_solicitations_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
