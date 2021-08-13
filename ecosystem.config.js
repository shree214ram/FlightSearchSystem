module.exports = {
  apps: [
    {
      name: 'Flight-Management',
      script: 'server.js',
      instances: 'max',
      ignore_watch: ['node_modules'],
      env: {
        PORT: 3008,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 3008,
        NODE_ENV: 'production',
      },
      error_file: 'logs/err.log',
      out_file: 'logs/out.log',
      log_file: 'logs/access.log',
      time: true,
    },
  ],
};
