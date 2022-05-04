import config from './index';

const createSequelizeConfigForEnv = (environment: string) => {
  /* eslint-disable global-require */
  switch (environment) {
    case 'production': {
      return {
        production: config.database,
      };
    }
    case 'qa': {
      return {
        qa: config.database,
      };
    }
    case 'uat': {
      return {
        uat: config.database,
      };
    }
    default: {
      return {
        development: config.database,
      };
    }
  }
};

// Needs to be `module.exports` as required by Sequelize CLI
// http://docs.sequelizejs.com/manual/migrations.html#configuration
export default createSequelizeConfigForEnv(process.env.NODE_ENV);
