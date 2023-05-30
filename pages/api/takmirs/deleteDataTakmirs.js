import prisma from "../../../client.ts";

export default async function handler(req, res) {

    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Metode tidak diijinkan' });

    const data = JSON.parse(req.body);

    const deleteData = await prisma.dataPengurusTakmir.delete({
        where: {
            id: data.id
        },
    });

    res.json(deleteData);

}