import prisma from "../../../client.ts";

const handler = async (req, res) => {
    const { takmirId } = req.query;
    const takmirDetail = await prisma.dataPengurusTakmir.findFirst({
        where: {id: takmirId},
        
    }) 

    res.json(takmirDetail)
}

export default handler;
