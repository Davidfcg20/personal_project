const { Sequelize, DataTypes, Model } = require('sequelize');
const {PROFILE_TABLE} = require('./profile.model');

const COMPANY_TABLE = 'companies';

const CompanySchema = {
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
  },
  profileId: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: PROFILE_TABLE,
      key: 'profile_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    unique: true,
    field: 'profile_id'
  }
};

class Companies extends Model {
  static associate(models){
    this.belongsTo(models.Profile, {
      as: 'profile',
      foreignKey: 'profileId'
    });

    this.hasMany(models.Location, {
      as: 'location',
      foreignKey: 'companyId'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: COMPANY_TABLE,
      modelName: 'Company',
      timestamps: false
    };
  }
}

module.exports = { COMPANY_TABLE, CompanySchema, Companies };
