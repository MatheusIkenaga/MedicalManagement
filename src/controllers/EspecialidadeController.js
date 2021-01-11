const Especialidade = require('../models/Especialidade')

module.exports = {
    async index(req,res){
        const especialidades = await Especialidade.findAll()

        return res.json(especialidades)

    },
}