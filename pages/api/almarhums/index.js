import prisma from "../../../client.ts";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getDataAlmarhum(req, res);
            
        case 'POST':
            return await addDataAlmarhum(req, res);
    }
}

const getDataAlmarhum = async (req, res) => {
    try {
        const result = await prisma.dataAlmarhum.findMany();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(201).json(error);
    }
}

const addDataAlmarhum = async (req, res) => {
    try {
        const { nama, tanggal_wafat, tanggal_lahir, rt, rw, bin } = req.body;

        const data = {
            nama: nama,
            tanggal_wafat: tanggal_wafat ? new Date(tanggal_wafat) : null,
            tanggal_lahir: tanggal_lahir ? new Date(tanggal_lahir) : null,
            rt: rt,
            rw: rw,
            bin: bin
        }

        const result = await prisma.dataAlmarhum.create({
            data: data,
            select: {
                id: true
            }
        });

        return res.status(200).json({...result, nama, tanggal_wafat, tanggal_lahir, rt, rw, bin})
    } catch (error) {
        return res.status(201).json(error);
    }
}