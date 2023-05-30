import prisma from "../../../client.ts";

const handler = async (req, res) => {
    if (req.method !== "POST")
        return res.status(405).json({ message: "Request method gagal" });

    const kegiatan = JSON.parse(req.body);

    const addDataKegiatan = await prisma.dataKegiatan.create({
        data: {
            title: kegiatan.title,
            waktu_mulai: kegiatan.waktu_mulai,
            waktu_selesai: kegiatan.waktu_selesai,
            lokasi: kegiatan.lokasi,
            deskripsi: kegiatan.deskripsi,
            tanggal: kegiatan.tanggal_kegiatan ? new Date(kegiatan.tanggal_kegiatan) : null,
            fotokegiatan: kegiatan.fotoPath,
        },
    });

    res.json(addDataKegiatan);
};

export default handler;




