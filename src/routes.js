const express = require ('express')
const routes = express.Router();

const MedicoController = require ('./controllers/MedicoController')
const EspecialidadeController = require ('./controllers/EspecialidadeController')
const pesquisacep = require('./controllers/pesquisacep')

routes.post('/medicos', MedicoController.store)
routes.get('/medicos', MedicoController.index)

routes.put('/atualizamedico', MedicoController.update)
routes.post('/deletarMedico', MedicoController.delete)

routes.get('/medicos/:field', MedicoController.filterByAnyField)

routes.get('/medicosespecialistas/:espec', MedicoController.filterByEspec)

routes.get('/especialidades', EspecialidadeController.index)

module.exports = routes