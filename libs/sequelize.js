const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const { setupModels } = require('./../db/models/index.js');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const connectionString = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(connectionString);
setupModels(sequelize);
//sequelize.sync();

module.exports = { sequelize };
