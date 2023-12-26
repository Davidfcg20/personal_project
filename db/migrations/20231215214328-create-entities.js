/* eslint-disable linebreak-style */
'use strict';
const { Sequelize, DataTypes } = require('sequelize');

const { COMMENTARY_TABLE } = require('./../models/commentary.model');
const { COMPANY_TABLE } = require('./../models/company.model');
const { CONSUMPTION_TABLE } = require('./../models/consumption.model');
const { LOCATION_TABLE } = require('./../models/location.model');
const { PRODUCT_TABLE } = require('./../models/product.model');
const { PROFILE_TABLE } = require('./../models/profile.model');
const { RATING_TABLE } = require('./../models/rating.model');
const { REVIEW_TABLE } = require('./../models/review.model');
const { STATUS_TABLE } = require('./../models/status.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(COMMENTARY_TABLE, {
      commentaryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'commentary_id'
      },
      commentaryIsVeganFriendly:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        field: 'commentary_is_vegan_friendly'
      },
      commentaryHasVeganSnack:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        field: 'commentary_has_vegan_snack'
      }
    });
    await queryInterface.createTable(COMPANY_TABLE, {
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'company_id'
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'company_name'
      }
    });
    await queryInterface.createTable(LOCATION_TABLE, {
      locationId:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        field: 'location_id'
      },
      locationCountry:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'location_country'
      },
      locationCity:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'location_city'
      },
      locationNeighborhood:{
        type: DataTypes.STRING,
        allowNull: true,
        field: 'location_neighborhood'
      }
    });
    await queryInterface.createTable(PROFILE_TABLE, {
      profileId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        field: 'profile_id'
      },
      profileUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        field: 'profile_url'
      },
    });
    await queryInterface.createTable(RATING_TABLE, {
      ratingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'rating_id'
      },
      ratingStar: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        field: 'rating_star'
      },
      ratingValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: true,
        field: 'rating_value'
      }
    });
    await queryInterface.createTable(STATUS_TABLE, {
      statusId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'status_id'
      },
      statusValue:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'status_value'
      }
    });
    await queryInterface.createTable(CONSUMPTION_TABLE, {
      consumptionId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'consumption_id'
      },
      consumptionPrice:{
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'consumption_price'
      },
      consumptionDate:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field: 'consumption_date'
      }
    });
    await queryInterface.createTable(PRODUCT_TABLE, {
      productId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'product_id'
      },
      productName:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'product_name'
      }
    });
    await queryInterface.createTable(REVIEW_TABLE, {
      reviewId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'review_id'
      },
      reviewGeneralOpinion: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'review_general_opinion'
      }
    });

  },

  async down (queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(COMMENTARY_TABLE);
    await queryInterface.dropTable(COMPANY_TABLE);
    await queryInterface.dropTable(CONSUMPTION_TABLE);
    await queryInterface.dropTable(LOCATION_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(PROFILE_TABLE);
    await queryInterface.dropTable(RATING_TABLE);
    await queryInterface.dropTable(REVIEW_TABLE);
    await queryInterface.dropTable(STATUS_TABLE);
  }
};
