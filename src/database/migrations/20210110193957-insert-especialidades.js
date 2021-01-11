'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Especialidades', [
      {
        descricao: 'ALERGOLOGIA',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        descricao: 'ANGIOLOGIA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'BUCO MAXILO',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        descricao: 'CARDIOLOGIA CLÍNICA',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        descricao: 'CARDIOLOGIA INFANTIL',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        descricao: 'CIRURGIA CABEÇA E PESCOÇO',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        descricao: 'CIRURGIA CARDÍACA',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        descricao: 'CIRURGIA DE TÓRAX',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);

  },



  down: async (queryInterface, Sequelize) => {

    queryInterface.bulkInsert('Especialidades', [
      {
      descricao: 'ALERGOLOGIA',
      }, 
      {
      descricao: 'ANGIOLOGIA',
      },
      {
      descricao: 'BUCO MAXILO',
      }, 
      {
      descricao: 'CARDIOLOGIA CLÍNICA',
      }, 
      {
      descricao: 'CARDIOLOGIA INFANTIL',
      }, 
      {
      descricao: 'CIRURGIA CABEÇA E PESCOÇO',
      }, 
      {
      descricao: 'CIRURGIA CARDÍACA',
      }, 
      {
      descricao: 'CIRURGIA DE TÓRAX',
      }

    ]);
  }
};
