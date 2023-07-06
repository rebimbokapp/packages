/*
  Warnings:

  - Changed the type of `zip_code` on the `adresses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "adresses" DROP COLUMN "zip_code",
ADD COLUMN     "zip_code" INTEGER NOT NULL;
