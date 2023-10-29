const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

require ('dotenv').config()
const port = process.env.PORT || 442;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Servidor Online. Rodando na porta: ${port}...`));