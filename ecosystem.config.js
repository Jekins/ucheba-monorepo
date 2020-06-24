module.exports = {
  apps: [
    {
      name: 'portal.web',
      script: 'yarn',
      args: 'workspace @ucheba/portal.web start',
      cwd: './',
      instances: 2,
      autorestart: true,
      watch: false,
      // eslint-disable-next-line @typescript-eslint/camelcase
      max_memory_restart: '1G',
      // eslint-disable-next-line @typescript-eslint/camelcase
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
