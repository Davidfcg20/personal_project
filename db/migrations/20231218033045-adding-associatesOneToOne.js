/* eslint-disable linebreak-style */
'use strict';

const { COMPANY_TABLE, CompanySchema } = require('./../models/company.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(COMPANY_TABLE, 'profile_id', CompanySchema.profileId);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(COMPANY_TABLE, 'profile_id', CompanySchema.profileId);
  }
};
