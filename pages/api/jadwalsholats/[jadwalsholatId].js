import prisma from "../../../client.ts";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getDataJadwalSholat(req, res);

        case 'PUT':
            return await updateDataJadwalSholat(req, res);
            
        case 'DELETE':
            return await deleteDataJadwalSholat(req, res);
    }
}

const getDataJadwalSholat = async (req, res) => {
    try {
        const { jadwalsholatId } = req.query;
        const result = await prisma.dataJadwalSholat.findFirst({
            where: {
                id: {
                    equals: parseInt(jadwalsholatId)
                }
            }
        })
        return res.status(200).json(result)
    } catch (error){
        return res.status(500).json(error.message);
    }
}

const updateDataJadwalSholat = async (req, res) => {
    try {
        const { tanggal, imsyak, subuh, terbit, dzuhur, ashar, maghrib, isya } = req.body;
        const { jadwalsholatId } = req.query;

        const result = await prisma.dataJadwalSholat.update({
            where: {
                id: parseInt(jadwalsholatId)
            },

            data: {
                tanggal: tanggal ? new Date(tanggal) : null,
                imsyak: imsyak,
                subuh: subuh,
                terbit: terbit,
                dzuhur: dzuhur,
                ashar: ashar,
                maghrib: maghrib,
                isya: isya
            }
        })
        return res.status(200).json({tanggal, imsyak, subuh, terbit, dzuhur, ashar, maghrib, isya, jadwalsholatId})
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const deleteDataJadwalSholat = async (req, res) => {
    try {
        const { jadwalsholatId } = req.query;
        
        const result = await prisma.dataJadwalSholat.delete({
            where: {
                id: parseInt(jadwalsholatId)
            }
        })
        return res.status(200).json({success: true})
    } catch (error) {
        return res.status(500).json(error.message);
    }
}