const { Model, DataTypes }  = require('sequelize')

class Medico extends Model  {
  static init(sequelize){ 
    super.init({
      nome: DataTypes.STRING(120),
      crm: DataTypes.INTEGER(7),
      tel_fixo: DataTypes.INTEGER,
      tel_celular: DataTypes.INTEGER,
      cep: DataTypes.STRING(8),
      logradouro: DataTypes.STRING,
      numero: DataTypes.STRING,
      complemento: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      uf: DataTypes.STRING(2),
      especId1: DataTypes.INTEGER,
      especId2: DataTypes.INTEGER,
    },{
      sequelize
    })
  }
}

module.exports = Medico