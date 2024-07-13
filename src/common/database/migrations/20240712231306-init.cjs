'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sync({ force: true });
    console.log('All models were synchronized successfully.');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop();
    console.log('All tables dropped!');
  }
};
