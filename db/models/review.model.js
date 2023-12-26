const { Sequelize, DataTypes, Model } = require('sequelize');

const {LOCATION_TABLE} = require('./location.model');
const {COMMENTARY_TABLE} = require('./commentary.model');
const {RATING_TABLE} = require('./rating.model');
const {STATUS_TABLE} = require('./status.model');

const REVIEW_TABLE = 'reviews';

const ReviewSchema = {
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
  },
  locationId:{
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: LOCATION_TABLE,
      key: 'location_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    unique: true,
    field: 'location_id'
  },
  commentaryId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: COMMENTARY_TABLE,
      key: 'commentary_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    unique: true,
    field: 'commentary_id'
  },
  ratingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: RATING_TABLE,
      key: 'rating_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    field: 'rating_id'
  },
  statusId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: STATUS_TABLE,
      key: 'status_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    field: 'status_id'
  },
};

class Reviews extends Model {
  static associate(models){
    this.belongsTo(models.Location, {
      as: 'location',
      foreignKey: 'locationId'
    });
    this.belongsTo(models.Commentary, {
      as: 'commentary',
      foreignKey: 'commentaryId'
    });
    this.belongsTo(models.Rating, {
      as: 'rating',
      foreignKey: 'ratingId'
    });
    this.belongsTo(models.Status, {
      as: 'status',
      foreignKey: 'statusId'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: REVIEW_TABLE,
      modelName: 'Review',
      timestamps: false,
    };
  }
}

module.exports = { REVIEW_TABLE, ReviewSchema, Reviews };
