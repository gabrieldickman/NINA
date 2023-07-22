const express = require('express');

const avisoController = require('../controllers/avisoController');

const routes = express.Router();

routes.get('/avisos', avisoController.listarAvisos);
routes.delete('/avisos/:id', avisoController.deletarAviso);
routes.put('/avisos/:id', avisoController.editarAviso);
routes.post('/avisos', avisoController.criarAviso);


module.exports = routes;