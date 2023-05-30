import prisma from "../../../client.ts";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getDataAlmarhum(req, res);

        case 'PUT':
            return await updateDataAlmarhum(req, res);
            
        case 'DELETE':
            return await deleteDataAlmarhum(req, res);
    }
}

const getDataAlmarhum = async (req, res) => {
    try {
        const { almarhumId } = req.query;
        const result = await prisma.dataAlmarhum.findFirst({
            where: {
                id: {
                    equals: parseInt(almarhumId)
                }
            }
        })
        return res.status(200).json(result)
    } catch (error){
        return res.status(500).json(error.message);
    }
}

const updateDataAlmarhum = async (req, res) => {
    try {
        const { nama, tanggal_wafat, tanggal_lahir, rt, rw, bin } = req.body;
        const { almarhumId } = req.query;

        const result = await prisma.dataAlmarhum.update({
            where: {
                id: parseInt(almarhumId)
            },

            data: {
                nama: nama,
                tanggal_wafat: tanggal_wafat ? new Date(tanggal_wafat) : null,
                tanggal_lahir: tanggal_lahir ? new Date(tanggal_lahir) : null,
                rt: rt,
                rw: rw,
                bin: bin
            }
        })
        return res.status(200).json({nama, tanggal_wafat, tanggal_lahir, rt, rw, bin, almarhumId})
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const deleteDataAlmarhum = async (req, res) => {
    try {
        const { almarhumId } = req.query;
        
        const result = await prisma.dataAlmarhum.delete({
            where: {
                id: parseInt(almarhumId)
            }
        })
        return res.status(200).json({success: true})
    } catch (error) {
        return res.status(500).json(error.message);
    }
}