-- AlterTable
ALTER TABLE "solicitations" ADD COLUMN     "workshop_id" TEXT;

-- AddForeignKey
ALTER TABLE "solicitations" ADD CONSTRAINT "solicitations_workshop_id_fkey" FOREIGN KEY ("workshop_id") REFERENCES "workshops"("id") ON DELETE SET NULL ON UPDATE CASCADE;
