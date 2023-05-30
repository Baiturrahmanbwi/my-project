import prisma from "../../../client.ts";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getDataPengurusTakmir(req, res);
    }
}

const getDataPengurusTakmir = async (req, res) => {
    try {
        const result = await prisma.dataPengurusTakmir.findMany();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(201).json(error);
    }
}

