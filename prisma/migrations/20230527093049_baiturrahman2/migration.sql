/*
  Warnings:

  - Changed the type of `tanggal_wafat` on the `dataAlmarhum` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tanggal_lahir` on the `dataAlmarhum` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "dataAlmarhum" DROP COLUMN "tanggal_wafat",
ADD COLUMN     "tanggal_wafat" DATE NOT NULL,
DROP COLUMN "tanggal_lahir",
ADD COLUMN     "tanggal_lahir" DATE NOT NULL;
