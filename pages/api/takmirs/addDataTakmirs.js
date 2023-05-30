import prisma from "../../../client.ts";

const handler = async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: "Request method gagal" });

    const data_takmir = JSON.parse(req.body);

    // const tanggalLahir = new Date(data_takmir.tanggal_lahir)
    
    const addDataTakmir = await prisma.dataPengurusTakmir.create({
        data: {
            nama: data_takmir.nama,
            tanggal: data_takmir.tanggal_lahir ? new Date(data_takmir.tanggal_lahir) : null,
            alamat: data_takmir.alamat,
            jabatan: data_takmir.jabatan,
            fototakmir: data_takmir.fotoPath
        }
    });

    res.json(addDataTakmir)
}

export default handler;