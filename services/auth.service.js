const Boom = require('@hapi/boom');
const { sequelize } = require('../libs/sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { config } = require('./../config/config');

const UserService = require('./../services/user.service');

const service = new UserService();

class AuthService {

  constructor(){

  }

  async getUser(email, password){
    const user = await service.findByEmail(email);
    if (!user) {
      throw Boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.userPassword);
    if (!isMatch) {
      throw Boom.unauthorized();
    }
    delete user.dataValues.userPassword;
    return user;
  }

  signToken(user){
    const payload = {
      sub: user.userId,
      role: user.userRole
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token
    };
  }

  async sendMail(infoEmail){
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword,
      },
    });
    await transporter.sendMail(infoEmail);
    return { message: 'mail sent'};
  }

  async sendRecovery(email){
    const user = await service.findByEmail(email);
    if (!user) {
      throw Boom.unauthorized();
    }
    const payload = { sub: user.userId};
    const token = jwt.sign(payload, config.jwtSecretRecovery, {expiresIn: '15min'});
    const link = `http://myfrontend.com/recovery?token=${token}`;
    await service.update(user.userId, {userRecoveryToken: token});
    const infoEmail = {
      from: `${config.smtpEmail}`,
      to: `${user.userEmail}`,
      subject: 'testing DBC project',
      html: `<b>Link for recovery ${link}</b>`,
    };
    const rta = await this.sendMail(infoEmail);
    return rta;
  }

  async changePassword(token, newPassword){
    try {
      const payload = jwt.verify(token, config.jwtSecretRecovery);
      const user = await service.findOne(payload.sub);
      if (user.userRecoveryToken !== token) {
        throw Boom.unauthorized();
      }
      const hash = await bcrypt.hash(newPassword, 10);
      await service.update(user.userId, {userRecoveryToken: null, userPassword: hash});
      return { message: 'password changed' };
    } catch (error) {
      throw Boom.unauthorized();
    }
  }

}

module.exports = AuthService;
