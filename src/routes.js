const express = require('express');

const avisoController = require('./avisoController');

const routes = express.Router();

routes.get('/avisos', avisoController.criarAviso);
routes.delete('/avisos/:id', avisoController.deletarAviso);
routes.put('/avisos/:id', avisoController.editarAviso);
routes.post('/avisos', avisoController.criarAviso);

module.exports = routes;