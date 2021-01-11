const { Model, DataTypes }  = require('sequelize')

class Especialidade extends Model  {
  static init(sequelize){ 
    super.init({
      descricao: DataTypes.STRING,
    },{
      sequelize
    })
  }
}

module.exports = Especialidade