/*
  Warnings:

  - You are about to drop the column `bulan` on the `dataJadwalSholat` table. All the data in the column will be lost.
  - Changed the type of `tanggal` on the `dataJadwalSholat` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tanggal` on the `dataPetugasSholatJumat` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "dataJadwalSholat" DROP COLUMN "bulan",
DROP COLUMN "tanggal",
ADD COLUMN     "tanggal" DATE NOT NULL;

-- AlterTable
ALTER TABLE "dataPetugasSholatJumat" DROP COLUMN "tanggal",
ADD COLUMN     "tanggal" DATE NOT NULL;
