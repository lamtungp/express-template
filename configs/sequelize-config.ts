// eslint-disable-next-line import/no-import-module-exports
import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  production: {
    username: process.env.DB_MAIN_USER,
    password: process.env.DB_MAIN_PASSWORD, // if blank then set null
    database: process.env.DB_NAME_PROD,
    host: process.env.DB_MAIN_HOST,
    port: parseInt(process.env.DB_MAIN_PORT || '5432'),
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_MAIN_USER,
    password: process.env.DB_MAIN_PASSWORD,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_MAIN_HOST,
    port: parseInt(process.env.DB_MAIN_PORT || '5432'),
    dialect: 'postgres',
  },
  development: {
    username: process.env.DB_MAIN_USER,
    password: process.env.DB_MAIN_PASSWORD,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_MAIN_HOST,
    port: parseInt(process.env.DB_MAIN_PORT || '5432'),
    dialect: 'postgres',
  },
};
