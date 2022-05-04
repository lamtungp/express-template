import { Sequelize, Dialect } from 'sequelize';
import pg from 'pg';
import env from '../../configs';

const { database } = env;

export default new Sequelize(database.database, database.username, database.password, {
  dialect: database.dialect as Dialect,
  dialectModule: pg,
  host: database.host,
  port: database.port,
  pool: database.pool,
});
