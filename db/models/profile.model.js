const { Sequelize, DataTypes, Model } = require ('sequelize');
const PROFILE_TABLE = 'profiles';

const ProfileSchema = {
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
};

class Profiles extends Model {
  static associate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName: PROFILE_TABLE,
      modelName: 'Profile',
      timestamps: false,
    };
  }
}

module.exports = { PROFILE_TABLE, ProfileSchema, Profiles };
