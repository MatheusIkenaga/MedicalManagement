module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Medicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING(120),
      },
      crm: {
        allowNull: false,
        type: DataTypes.INTEGER(7),
        unique: true,
      },
      tel_fixo: {
        allowNull: true,
        type: DataTypes.BIGINT,
      },
      tel_celular: {
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      cep: {
        allowNull: false,
        type: DataTypes.INTEGER(8),
      },
      logradouro: {
        allowNull: false,
        type: DataTypes.STRING ,
      },
      numero: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      complemento: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      bairro: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cidade: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      uf: {
        allowNull: false,
        type: DataTypes.STRING(2),
      },
      especId1: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Especialidades', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onDelete: 'SET NULL',
      },
      especId2: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Especialidades', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onDelete: 'SET NULL',
      },
      createdAt:{
        type: DataTypes.DATE,
        allowNull:false
      },
      updatedAt:{
        type: DataTypes.DATE,
        allowNull:false
      }
      
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Medicos');
  }
};