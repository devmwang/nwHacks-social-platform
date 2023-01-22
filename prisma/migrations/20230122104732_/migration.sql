/*
  Warnings:

  - You are about to drop the column `datePosted` on the `PositionListing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PositionListing" DROP COLUMN "datePosted",
ADD COLUMN     "tsPosted" INTEGER;
