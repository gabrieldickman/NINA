const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    async listarAvisos(req, res) {

        const aviso = await prisma.aviso.findMany();

        return res.json(aviso);
    },

    async criarAviso(req, res) {

        const aviso = await prisma.aviso.create({
            data: {
                content: req.body.content,
                day: req.body.day
            }
        })

        res.status(201).json({ message: 'Um novo aviso foi criado!' });
    },

    async deletarAviso(req, res) {

        const aviso = await prisma.aviso.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })

        res.status(200).json({ message: 'O aviso foi excluído!' });
    },

    async editarAviso(req, res) {

        const aviso = await prisma.aviso.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                content : req.body.content
            }
        })

        res.status(200).json({ message: 'O aviso foi editado!' })

    }
}