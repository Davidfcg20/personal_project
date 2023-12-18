const { Sequelize, DataTypes, Model } = require('sequelize');

const LOCATION_TABLE = 'locations';

const LocationSchema = {
  locationId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
};

class Locations extends Model {
  static associate(){

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
