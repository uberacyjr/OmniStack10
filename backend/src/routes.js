const { Router } = require('express');
const routes = Router();
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

// Métodos HTTP: GET, POST, PUT, DELETE 
// Tipos de Parametros
// Query Pametro: request.query (Filtros, ordenacao, paginacao)
// Route Pametro: request.params  (PUT e DELETE, Nao tem nome) 
// Body Pametro: request.body (Dados para criacao ou alteracao de um registro)
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;