'use srtict';

/** @type {import ('sequelize-cli').Migration } */

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('comments', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        text: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        articleId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'articles',
            key: 'id'
          }
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('comments');
    }
};