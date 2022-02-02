'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('users', { 
        id:{ 
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      });
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
    
     */ 
    await queryInterface.dropTable('users');
    
  }
};
