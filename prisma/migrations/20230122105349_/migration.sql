/*
  Warnings:

  - You are about to drop the column `tsPosted` on the `PositionListing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PositionListing" DROP COLUMN "tsPosted",
ADD COLUMN     "dtPosted" TIMESTAMP(3);
