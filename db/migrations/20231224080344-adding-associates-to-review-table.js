/* eslint-disable linebreak-style */
'use strict';

const { REVIEW_TABLE, ReviewSchema } = require('../models/review.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(REVIEW_TABLE, 'location_id', ReviewSchema.locationId);
    await queryInterface.addColumn(REVIEW_TABLE, 'commentary_id', ReviewSchema.commentaryId);
    await queryInterface.addColumn(REVIEW_TABLE, 'rating_id', ReviewSchema.ratingId);
    await queryInterface.addColumn(REVIEW_TABLE, 'status_id', ReviewSchema.statusId);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(REVIEW_TABLE, 'location_id');
    await queryInterface.removeColumn(REVIEW_TABLE, 'commentary_id');
    await queryInterface.removeColumn(REVIEW_TABLE, 'rating_id');
    await queryInterface.removeColumn(REVIEW_TABLE, 'status_id');
  }
};
