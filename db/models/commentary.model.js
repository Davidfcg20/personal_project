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
  commentaryGeneralOpinion:{
    type: DataTypes.STRING,
    allowNull: true,
    field: 'general_opinion'
  },
};

class Commentaries extends Model {
  static associations(){

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
