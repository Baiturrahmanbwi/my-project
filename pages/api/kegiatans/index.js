import prisma from "../../../client.ts";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getDataKegiatan(req, res);
    }
}

const getDataKegiatan = async (req, res) => {
    try {
        const result = await prisma.dataKegiatan.findMany();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(201).json(error);
    }
}
