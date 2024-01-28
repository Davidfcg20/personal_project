const { Sequelize, DataTypes, Model } = require ('sequelize');
//const bcrypt = require('bcrypt');

const USER_TABLE = 'users';

const UserSchema = {
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'user_id'
  },
  userLastName:{
    type: DataTypes.STRING,
    allowNull: true,
    field: 'user_last_name'
  },
  userFirstName:{
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_first_name'
  },
  userAge:{
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_age'
  },
  userEmail:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'user_email'
  },
  userPassword:{
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_password'
  },
  userRecoveryToken:{
    type: DataTypes.STRING,
    allowNull: true,
    field: 'user_recovery_token'
  },
  userRole:{
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'consumer',
    field: 'user_role'
  }
};

class Users extends Model {
  static associate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
      /*
      hooks: {
        beforeCreate: async (user, options) => {
          const hashPassword = await bcrypt.hash(user.userPassword, 10);
          user.userPassword = hashPassword;
        },
        afterCreate: async (user, options) => {
          delete user.dataValues.userPassword;
        },
      }
      */
    };
  }
}

module.exports = { USER_TABLE, UserSchema, Users };
