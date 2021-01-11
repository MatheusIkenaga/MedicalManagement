const Sequelize = require('sequelize');
const Medico = require('../models/Medico')
const Especialidade = require('../models/Especialidade')
const Op = Sequelize.Op

module.exports = {
    async index(req,res){
        const medicos = await Medico.findAll()

        return res.json(medicos)

    },


    async store(req,res){
        const {
            nome,crm,tel_fixo,tel_celular,cep,logradouro,numero,complemento,bairro,cidade,uf,especId1,especId2
        } = req.body

        const medico = await Medico.create({nome,crm,tel_fixo,tel_celular,cep,logradouro,numero,complemento,bairro,cidade,uf,especId1,especId2})
        .then(function(medico) {
        // you can now access the newly created user
        console.log(medico.toJSON());
        return res.json(medico)
        })
        .catch(function(err) {
        // print the error details
            console.log(err);
            return res.send({ success: false, error: err.parent.sqlMessage });
        })

    },

    async update(req,res){
        const {id,nome,crm,tel_fixo,tel_celular,cep,logradouro,numero,complemento,bairro,cidade,uf,especId1,especId2
        } = req.body
        console.log(id)

        const medico = await Medico.update(
            {nome: `${nome}`,
            crm: `${crm}`,
            tel_fixo,tel_celular,cep,logradouro,numero,complemento,bairro,cidade,uf,especId1,especId2},
            {where: {id: `${id}`}})
            .then(function(medico){
                return res.json({sucesso: `Medico (ID: ${id}) atualizado`})
        })
        
    },

    async filterByAnyField(req,res){
        const{ field } = req.params;

        const medicos = await Medico.findAll({ 
            where: { 
                [Op.or]:[
                    {nome: {[Op.like]:`%${field}%`}},
                    {crm: {[Op.like]:`%${field}%`}},
                    {tel_fixo: {[Op.like]:`%${field}%`}},
                    {tel_celular: {[Op.like]:`%${field}%`}},
                    {cep: {[Op.like]:`%${field}%`}},
                    {numero: {[Op.like]:`%${field}%`}},
                    {complemento: {[Op.like]:`%${field}%`}},
                    {bairro: {[Op.like]:`%${field}%`}},
                    {cidade: {[Op.like]:`%${field}%`}},
                    {uf: {[Op.like]:`%${field}%`}},
                ]
            }
        })
        
       return res.json(medicos)    
                                                    
    },

    async filterByEspec(req,res){
        var{ espec } = req.params;
        espec = espec.replace(/_/g," ")
        console.log(espec)

        const Especialidades = await Especialidade.findAll({ 
                where: {
                    descricao : `${espec}`
                }
            })
            console.log(JSON.stringify(Especialidades[0].id))

            const EspecID = JSON.stringify(Especialidades[0].id)
            const medicos = await Medico.findAll({ 
                where: { 
                    [Op.or]:[
                        {especId1: `${EspecID}`},
                        {especId2: `${EspecID}`},
                    ]
                }
            })
        
       return res.json(medicos)    
                                                    
    },

    async delete(req,res){
        const {id} = req.body

        const medico = await Medico.findByPk(id)
        if(!medico){
            return res.status(400).json({error: 'Medico não encontrato'})
        }
        await Medico.destroy({ where: { id: `${id}` }})

        return res.json()

    },

    


    
}