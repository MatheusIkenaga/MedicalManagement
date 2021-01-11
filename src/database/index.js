const Sequelize = require('sequelize')
const dbConfig = require ('../config/database')

const Medico = require ('../models/Medico')
const Especialidade = require ('../models/Especialidade')

const connection = new Sequelize(dbConfig)

Medico.init(connection)
Especialidade.init(connection)

module.exports = connection;