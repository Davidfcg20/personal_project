const { Sequelize, DataTypes, Model } = require('sequelize');

const STATUS_TABLE = 'statuses';

const StatusSchema = {
  statusId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'status_id'
  },
  statusValue:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'status_value'
  }
};

class Statuses extends Model {
  static associations(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName: STATUS_TABLE,
      modelName: 'Status',
      timestamps: false
    };
  }
}

module.exports = { STATUS_TABLE, StatusSchema, Statuses };
