/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  apps: [
    {
      name: 'portal.web',
      script: 'lerna',
      args: 'exec yarn start --scope=@ucheba/portal.web',
      cwd: './',
      instances: 2,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
      },
      error_file: '/var/log/ucheba-frontend/err.log',
      time: true,
    },
  ],
}
