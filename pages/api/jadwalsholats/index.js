import prisma from "../../../client.ts";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getDataJadwalSholat(req, res);
            
        case 'POST':
            return await addDataJadwalSholat(req, res);
    }
}

const getDataJadwalSholat = async (req, res) => {
    try {
        const result = await prisma.dataJadwalSholat.findMany();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(201).json(error);
    }
}

const addDataJadwalSholat = async (req, res) => {
    try {
        const { tanggal, imsyak, subuh, terbit, dzuhur, ashar, maghrib, isya } = req.body;

        const data = {
            tanggal: tanggal ? new Date(tanggal) : null ,
            imsyak: imsyak,
            subuh: subuh,
            terbit: terbit,
            dzuhur: dzuhur,
            ashar: ashar,
            maghrib: maghrib,
            isya: isya
        }

        const result = await prisma.dataJadwalSholat.create({
            data: data,
            select: {
                id: true
            }
        });

        return res.status(200).json({...result, bulan, tanggal, imsyak, subuh, terbit, dzuhur, ashar, maghrib, isya})
    } catch (error) {
        return res.status(201).json(error);
    }
}