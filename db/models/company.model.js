const { Sequelize, DataTypes, Model } = require('sequelize');

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
};

class Companies extends Model {
  static associate(){

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
