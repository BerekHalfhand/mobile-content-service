const dotenv = require('dotenv');

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';

dotenv.config({ path: envFile });

module.exports = {
  id: 'mobile-content-service',

  env: process.env.NODE_ENV,

  http: {
    port: parseInt(process.env.REST_PORT, 10) || 9001,
  },

  log: {
    namespace: process.env.LOG_NAMESPACE || 'mobile-content-service',
    level: process.env.LOG_LEVEL || 'error',
  },
};
