import dotenv from 'dotenv';
dotenv.config();

export const Environment = {
  Development: 'development',
  UAT: 'uat',
  QA: 'qa',
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
  username: process.env.DB_MAIN_USER,
  password: process.env.DB_MAIN_PASSWORD, // if blank then set null
  database: process.env.DB_NAME_DEVELOPMENT,
  host: process.env.DB_MAIN_HOST,
  pool: process.env.ENABLE_CONNECTION_POOL ? poolConfig : null,
  dialect: process.env.DB_MAIN_DIALECT,
  logging: process.env.NODE_ENV === Environment.Development,
  port: parseInt(process.env.DB_PORT),
  timezone: '+00:00',
};

export default {
  /**
   * Application environment mode either developement or production or test
   * @type {String}
   */
  environment: process.env.NODE_ENV,

  database,

  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,

  salt: process.env.SALT,
};
