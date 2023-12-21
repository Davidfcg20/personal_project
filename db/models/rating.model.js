const { Sequelize, DataTypes, Model } = require('sequelize');

const RATING_TABLE = 'ratings';

const RatingSchema = {
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
};

class Ratings extends Model {
  static associate(models){
    this.hasMany(models.Visit, {
      as: 'visit',
      foreignKey: 'ratingId'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: RATING_TABLE,
      modelName: 'Rating',
      timestamps: false,
    };
  }
}

module.exports = { RATING_TABLE, RatingSchema, Ratings };
