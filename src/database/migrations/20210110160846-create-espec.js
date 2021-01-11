module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Especialidades', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        descricao: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        createdAt:{
          type: DataTypes.DATE,
          allowNull:false
        },
        updatedAt:{
          type: DataTypes.DATE,
          allowNull:false
        }
      }
    )},

  down: (queryInterface) => {
    return queryInterface.dropTable('Especialidades');
  }
};
    