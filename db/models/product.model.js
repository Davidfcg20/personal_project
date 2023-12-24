const { Sequelize, DataTypes, Model } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  productId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'product_id'
  },
  productName:{
    type: DataTypes.STRING,
    allowNull: false,
    field: 'product_name'
  }
};

class Products extends Model {
  static associate(models){
    this.belongsToMany(models.Location, {
      as: 'consumption',
      through: models.Consumption,
      foreignKey: 'productId',
      otherKey: 'locationId'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    };
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Products };
