/* eslint-disable linebreak-style */
'use strict';

const { CONSUMPTION_TABLE, ConsumptionSchema } = require('./../models/consumption.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(CONSUMPTION_TABLE, 'product_id', ConsumptionSchema.productId);
    await queryInterface.addColumn(CONSUMPTION_TABLE, 'location_id', ConsumptionSchema.locationId);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(CONSUMPTION_TABLE, 'product_id');
    await queryInterface.removeColumn(CONSUMPTION_TABLE, 'location_id');
  }
};
