/* eslint-disable linebreak-style */
'use strict';

const { VISIT_TABLE, VisitSchema } = require('./../models/visits.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(VISIT_TABLE, 'location_id', VisitSchema.locationId);
    await queryInterface.addColumn(VISIT_TABLE, 'commentary_id', VisitSchema.commentaryId);
    await queryInterface.addColumn(VISIT_TABLE, 'rating_id', VisitSchema.ratingId);
    await queryInterface.addColumn(VISIT_TABLE, 'status_id', VisitSchema.statusId);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(VISIT_TABLE, 'location_id');
    await queryInterface.removeColumn(VISIT_TABLE, 'commentary_id');
    await queryInterface.removeColumn(VISIT_TABLE, 'rating_id');
    await queryInterface.removeColumn(VISIT_TABLE, 'status_id');
  }
};
