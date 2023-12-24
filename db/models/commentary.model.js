const { Sequelize, DataTypes, Model } = require('sequelize');

const COMMENTARY_TABLE = 'commentaries';

const CommentarySchema = {
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
  },
};

class Commentaries extends Model {
  static associate(models){
    this.hasOne(models.Review, {
      as: 'review',
      foreignKey: 'commentaryId'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: COMMENTARY_TABLE,
      modelName: 'Commentary',
      timestamps: false
    };
  }
}

module.exports = { COMMENTARY_TABLE, CommentarySchema, Commentaries };
