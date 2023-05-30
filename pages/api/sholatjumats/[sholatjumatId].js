import prisma from "../../../client.ts";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getDataPetugasSholatJumat(req, res);

        case 'PUT':
            return await updateDataPetugasSholatJumat(req, res);

        case 'DELETE':
            return await deleteDataPetugasSholatJumat(req, res);
    }
}

const getDataPetugasSholatJumat = async (req, res) => {
    try {
        const { sholatjumatId } = req.query;
        const result = await prisma.dataPetugasSholatJumat.findFirst({
            where: {
                id: {
                    equals: parseInt(sholatjumatId)
                }
            }
        })
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const updateDataPetugasSholatJumat = async (req, res) => {
    try {
        const { tanggal, bilalAwal, bilalAkhir, khotib, imam } = req.body;
        const { sholatjumatId } = req.query;

        const result = await prisma.dataPetugasSholatJumat.update({
            where: {
                id: parseInt(sholatjumatId)
            },

            data: {
                tanggal: tanggal ? new Date(tanggal) : null,
                bilalAwal: bilalAwal,
                bilalAkhir: bilalAkhir,
                khotib: khotib,
                imam: imam
            }
        })
        return res.status(200).json({ tanggal, bilalAwal, bilalAkhir, khotib, imam, sholatjumatId })
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const deleteDataPetugasSholatJumat = async (req, res) => {
    try {
        const { sholatjumatId } = req.query;

        const result = await prisma.dataPetugasSholatJumat.delete({
            where: {
                id: parseInt(sholatjumatId)
            }
        })
        return res.status(200).json({ success: true })
    } catch (error) {
        return res.status(500).json(error.message);
    }
}