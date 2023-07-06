/*
  Warnings:

  - The values [CATEGORY_MOTORCYCLE,CATEGORY_CAR,CATEGORY_GENERAL,CATEGORY_PARTS_DISTRIBUTOR,CATEGORY_HEAVY_VEHICLES] on the enum `WorkshopCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "WorkshopCategory_new" AS ENUM ('MOTORCYCLE', 'CAR', 'GENERAL', 'PARTS_DISTRIBUTOR', 'HEAVY_VEHICLES');
ALTER TABLE "workshops" ALTER COLUMN "category" TYPE "WorkshopCategory_new" USING ("category"::text::"WorkshopCategory_new");
ALTER TYPE "WorkshopCategory" RENAME TO "WorkshopCategory_old";
ALTER TYPE "WorkshopCategory_new" RENAME TO "WorkshopCategory";
DROP TYPE "WorkshopCategory_old";
COMMIT;
