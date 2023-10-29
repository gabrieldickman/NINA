const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const { PrismaClient } = require('@prisma/client')

require ('dotenv').config()
const port = process.env.PORT || 442;

const app = express();
const prisma = new PrismaClient()

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Servidor ativo na porta ${port}...`));