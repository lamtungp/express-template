import dotenv from 'dotenv';
dotenv.config();

export const Environment = {
  Development: 'development',
  Test: 'test',
  Production: 'production',
};

const poolConfig = {
  max: 100,
  min: 0,
  idle: 20000,
  acquire: 20000,
  evict: 30000,
  handleDisconnects: true,
};

const database = {
  username: process.env.DB_MAIN_USER || 'postgres',
  password: process.env.DB_MAIN_PASSWORD || 'postgres', // if blank then set null
  database: process.env.DB_NAME_DEVELOPMENT || 'dbdev',
  host: process.env.DB_MAIN_HOST || 'localhost',
  pool: process.env.ENABLE_CONNECTION_POOL ? poolConfig : null,
  dialect: 'postgres',
  logging: process.env.NODE_ENV === Environment.Development,
  port: parseInt(process.env.DB_PORT) || 3306,
  timezone: '+00:00',
};

export default {
  /**
   * Application environment mode either developement or production or test
   * @type {String}
   */
  environment: process.env.NODE_ENV || 'development',

  database,

  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,

  salt: process.env.SALT,
};
