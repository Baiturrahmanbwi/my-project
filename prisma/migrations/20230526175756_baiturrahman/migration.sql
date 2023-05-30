-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dataAlmarhum" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "tanggal_wafat" TEXT NOT NULL,
    "tanggal_lahir" TEXT NOT NULL,
    "rt" TEXT NOT NULL,
    "rw" TEXT NOT NULL,
    "bin" TEXT NOT NULL,

    CONSTRAINT "dataAlmarhum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dataJadwalSholat" (
    "id" SERIAL NOT NULL,
    "bulan" TEXT NOT NULL,
    "tanggal" TEXT NOT NULL,
    "imsyak" TEXT NOT NULL,
    "subuh" TEXT NOT NULL,
    "terbit" TEXT NOT NULL,
    "dzuhur" TEXT NOT NULL,
    "ashar" TEXT NOT NULL,
    "maghrib" TEXT NOT NULL,
    "isya" TEXT NOT NULL,

    CONSTRAINT "dataJadwalSholat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dataPetugasSholatJumat" (
    "id" SERIAL NOT NULL,
    "tanggal" TEXT NOT NULL,
    "bilalAwal" TEXT NOT NULL,
    "bilalAkhir" TEXT NOT NULL,
    "khotib" TEXT NOT NULL,
    "imam" TEXT NOT NULL,

    CONSTRAINT "dataPetugasSholatJumat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dataPengurusTakmir" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "tanggal" DATE NOT NULL,
    "alamat" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "fototakmir" TEXT NOT NULL,

    CONSTRAINT "dataPengurusTakmir_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dataKegiatan" (
    "id" SERIAL NOT NULL,
    "tanggal" DATE NOT NULL,
    "title" TEXT NOT NULL,
    "waktu_mulai" TEXT NOT NULL,
    "waktu_selesai" TEXT NOT NULL,
    "lokasi" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "fotokegiatan" TEXT NOT NULL,

    CONSTRAINT "dataKegiatan_pkey" PRIMARY KEY ("id")
);
