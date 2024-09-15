'use srtict';

/** @type {import ('sequelize-cli').Migration } */

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('comments', [
        {
          text: 'Сomment for Article 1.',
          articleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          text: 'Сomment for Article 1.',
          articleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          text: 'Сomment for Article 2.',
          articleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('comments', null, {});
    }
  };