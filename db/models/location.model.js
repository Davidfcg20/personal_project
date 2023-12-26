const { Sequelize, DataTypes, Model } = require('sequelize');
const {COMPANY_TABLE} = require('./company.model');

const LOCATION_TABLE = 'locations';

const LocationSchema = {
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
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: COMPANY_TABLE,
      key: 'company_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    field: 'company_id'
  },
};

class Locations extends Model {
  static associate(models){
    this.belongsTo(models.Company, {
      as: 'company',
      foreignKey: 'companyId'
    });
    this.hasOne(models.Review, {
      as: 'review',
      foreignKey: 'locationId'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: LOCATION_TABLE,
      modelName: 'Location',
      timestamps: false,
    };
  }
}

module.exports = { LOCATION_TABLE, LocationSchema, Locations };
