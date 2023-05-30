import prisma from "../../../client.ts";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getDataPetugasSholatJumat(req, res);

        case 'POST':
            return await addDataPetugasSholatJumat(req, res);
    }
}

const getDataPetugasSholatJumat = async (req, res) => {
    try {
        const result = await prisma.dataPetugasSholatJumat.findMany();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(201).json(error);
    }
}

const addDataPetugasSholatJumat = async (req, res) => {
    try {
        const { tanggal, bilalAwal, bilalAkhir, khotib, imam } = req.body;

        const data = {
            tanggal: tanggal ? new Date(tanggal) : null,
            bilalAwal: bilalAwal,
            bilalAkhir: bilalAkhir,
            khotib: khotib,
            imam: imam
        }

        const result = await prisma.dataPetugasSholatJumat.create({
            data: data,
            select: {
                id: true
            }
        });

        return res.status(200).json({ ...result, tanggal, bilalAwal, bilalAkhir, khotib, imam })
    } catch (error) {
        return res.status(201).json(error);
    }
}