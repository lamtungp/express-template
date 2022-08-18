import { Sequelize, Dialect } from 'sequelize';
import pg from 'pg';
import config from '../../configs';

const { database } = config;

export default new Sequelize(database.database, database.username, database.password, {
  dialect: database.dialect as Dialect,
  dialectModule: pg,
  host: database.host,
  port: database.port,
  pool: database.pool,
});
