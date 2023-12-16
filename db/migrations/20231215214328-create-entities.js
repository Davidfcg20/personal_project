/* eslint-disable linebreak-style */
'use strict';

const { COMMENTARY_TABLE, CommentarySchema } = require('./../models/commentary.model');
const { COMPANY_TABLE, CompanySchema } = require('./../models/company.model');
const { LOCATION_TABLE, LocationSchema } = require('./../models/location.model');
const { PROFILE_TABLE, ProfileSchema } = require('./../models/profile.model');
const { RATING_TABLE, RatingSchema } = require('./../models/rating.model');
const { STATUS_TABLE, StatusSchema } = require('./../models/status.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(COMMENTARY_TABLE, CommentarySchema);
    await queryInterface.createTable(COMPANY_TABLE, CompanySchema);
    await queryInterface.createTable(LOCATION_TABLE, LocationSchema);
    await queryInterface.createTable(PROFILE_TABLE, ProfileSchema);
    await queryInterface.createTable(RATING_TABLE, RatingSchema);
    await queryInterface.createTable(STATUS_TABLE, StatusSchema);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(COMMENTARY_TABLE);
    await queryInterface.dropTable(COMPANY_TABLE);
    await queryInterface.dropTable(LOCATION_TABLE);
    await queryInterface.dropTable(PROFILE_TABLE);
    await queryInterface.dropTable(RATING_TABLE);
    await queryInterface.dropTable(STATUS_TABLE);
  }
};
