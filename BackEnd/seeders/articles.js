'use srtict';

/** @type {import ('sequelize-cli').Migration } */

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('articles', [
        {
          title: 'Article 1',
          content: 'Сontent of Article 1.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Article 2',
          content: 'Сontent of Article 2.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Article 3',
          content: 'Сontent of Article 3.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('articles', null, {});
    }
};