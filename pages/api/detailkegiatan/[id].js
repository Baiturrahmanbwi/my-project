import prisma from "../../../client.ts";

const handler = async (req, res) => {
    const { kegiatanId } = req.query;
    const kegiatanDetail = await prisma.dataKegiatan.findFirst({
        where: { id: kegiatanId },

    })

    res.json(kegiatanDetail)
}

export default handler;
