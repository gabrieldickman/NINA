const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const { PrismaClient } = require('@prisma/client')

const app = express();
const prisma = new PrismaClient()

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use(routes);


app.listen(80, () => console.log("Servidor rodando..."));