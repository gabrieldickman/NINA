const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { json } = require('express');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/avisos', async (req, res) =>{

    const avisos = await prisma.aviso.findMany() 

    return res.json(avisos)
} );

app.post('/avisos', async (req, res) =>{

    const aviso = await prisma.aviso.create({
        data: {
            content: req.body.content,
            date: req.body.date
        }
    }) 
    
    res.status(201).json({ message: 'Aviso criado com sucesso'})
})

app.delete('/avisos/:id', async (req, res) =>{

    const aviso = await prisma.aviso.delete({
        where : {
            id : parseInt(req.params.id)
        }
    })

    res.status(200).json({ message: 'Aviso deletado com sucesso'})

})

app.put('/avisos/:id', async (req, res) =>{
    const aviso = await prisma.aviso.update({
        where : {
            id : parseInt(req.params.id)
        },

        data : {
            content : req.body.content
        }
    })

    res.status(200).json({ message : 'Aviso atualizado com sucesso'})
})

















app.listen(80, ()=> console.log("Servidor rodando..."));