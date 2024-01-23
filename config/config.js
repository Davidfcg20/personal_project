require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
  pgadmEmail: process.env.PGADMIN_DEFAULT_EMAIL,
  pgadmPassword: process.env.PGADMIN_DEFAULT_PASSWORD,
  apiKey: process.env.API_KEY
};

module.exports = { config };
