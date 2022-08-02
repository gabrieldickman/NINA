const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { json } = require('express');
const routes = require('./routes');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(routes);


app.listen(80, () => console.log("Servidor rodando..."));