/* eslint-disable linebreak-style */
'use strict';

const { LOCATION_TABLE, LocationSchema } = require('./../models/location.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(LOCATION_TABLE, 'company_id', LocationSchema.companyId);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(LOCATION_TABLE, 'company_id', LocationSchema.companyId);
  }
};
