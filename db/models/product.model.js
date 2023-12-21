const { Sequelize, DataTypes, Model } = require('sequelize');

const STATUS_TABLE = 'products';

const StatusSchema = {
  productsId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'products_id'
  },
  productsName:{
    type: DataTypes.STRING,
    allowNull: false,
    field: 'products_name'
  }
};

class Statuses extends Model {
  static associate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName: STATUS_TABLE,
      modelName: 'Products',
      timestamps: false
    };
  }
}

module.exports = { STATUS_TABLE, StatusSchema, Statuses };
