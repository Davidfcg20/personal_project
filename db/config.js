const { config } = require('./../config/config.js');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const connectionString = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: connectionString,
    dialect: 'postgres'
  },
  production: {
    url: connectionString,
    dialect: 'postgres'
  }
};
