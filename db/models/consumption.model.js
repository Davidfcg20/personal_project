const { Sequelize, DataTypes, Model } = require('sequelize');
const { PRODUCT_TABLE } = require('./product.model');
const { LOCATION_TABLE } = require('./location.model');

const CONSUMPTION_TABLE = 'consumptions';

const ConsumptionSchema = {
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
  },
  productId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: PRODUCT_TABLE,
      key: 'product_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    field: 'product_id'
  },
  locationId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: LOCATION_TABLE,
      key: 'location_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    field: 'location_id'
  },
};

class Consumptions extends Model {
  static associate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName: CONSUMPTION_TABLE,
      modelName: 'Consumption',
      timestamps: false
    };
  }
}

module.exports = { CONSUMPTION_TABLE, ConsumptionSchema, Consumptions };
