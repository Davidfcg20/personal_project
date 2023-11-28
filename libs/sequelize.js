const { Sequelize } = require('sequelize');
const { config } = require('../config/config');

const connectionString = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(connectionString);
//sequelize.sync();

module.exports = { sequelize };
