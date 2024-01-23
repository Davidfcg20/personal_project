const Boom = require('@hapi/boom');
const { sequelize } = require('../libs/sequelize');
const bcrypt = require('bcrypt');

class UserService {

  constructor(){

  }

  async create(data){
    const hashPassword = await bcrypt.hash(data.userPassword, 10);
    const newUser = await sequelize.models.User.create({
      ...data,
      userPassword: hashPassword,
    });
    delete newUser.dataValues.userPassword;
    return newUser;
  }

  async findOne(userId){
    const user = await sequelize.models.User.findByPk(userId);
    if(!user){
      throw Boom.notFound('user not found');
    } else {
      return user;
    }
  }

  async findAll(){
    const rta = await sequelize.models.User.findAll();
    return rta;
  }

  async update(userId, changes){
    const user = await  this.findOne(userId);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(userId){
    const user = await  this.findOne(userId);
    await user.destroy();
    return userId;
  }

}

module.exports = UserService;
