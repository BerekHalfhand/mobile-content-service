const config = require('./src/config');

module.exports = {
  apps: [
    {
      name: config.id,
      script: './src/index.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
