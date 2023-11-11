const express = require('express');
const routes = express.Router();

const avisoController = require('../controllers/avisoController');
const veronicaController = require('../controllers/veronicaController')

routes.get('/avisos', avisoController.listarAvisos);
routes.delete('/avisos/:id', avisoController.deletarAviso);
routes.put('/avisos/:id', avisoController.editarAviso);
routes.post('/avisos', avisoController.criarAviso);

routes.get('/chamados/conexao', veronicaController.getChamadosConexao);
routes.get('/chamados/reincidencia', veronicaController.getChamadosReincidencia);
routes.get('/chamados/tecnico/:id', veronicaController.getChamadosPorTecnico);
routes.get('/chamados/cidade/:id', veronicaController.getChamadosPorCidade);
routes.get('/chamados/data/:id', veronicaController.getChamadosPorData);
routes.get('/chamados/assunto/:id', veronicaController.getChamadosPorAssunto);
routes.get('/chamados/reagendar/:id', veronicaController.getChamadosParaReagendar);


module.exports = routes;