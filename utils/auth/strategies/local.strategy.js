const { Strategy } = require('passport-local');
const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('./../../../services/user.service');
const service = new UserService();

const localStrategy = new Strategy(
  {
    usernameField: 'userEmail',
    passwordField: 'userPassword',
  },
  async (email, password, done) => {
    try {
      const user = await service.findByEmail(email);
      if (!user) { return done(Boom.unauthorized(), false); }
      const isMatch = await bcrypt.compare(password, user.userPassword);
      if (!isMatch) { return done(Boom.unauthorized(), false); }
      delete user.dataValues.userPassword;
      return done(null, user);

    } catch (error) {
      return done(error, false);

    }
  }
);

module.exports = localStrategy;
