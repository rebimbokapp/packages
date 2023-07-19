-- CreateTable
CREATE TABLE "_accepted_solicitations" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_accepted_solicitations_AB_unique" ON "_accepted_solicitations"("A", "B");

-- CreateIndex
CREATE INDEX "_accepted_solicitations_B_index" ON "_accepted_solicitations"("B");

-- AddForeignKey
ALTER TABLE "_accepted_solicitations" ADD CONSTRAINT "_accepted_solicitations_A_fkey" FOREIGN KEY ("A") REFERENCES "solicitations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_accepted_solicitations" ADD CONSTRAINT "_accepted_solicitations_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
