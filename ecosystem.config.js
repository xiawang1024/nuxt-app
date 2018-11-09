module.exports = {
  apps: [
    {
      name: 'nuxt',
      script: './server/index.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'cross-env PORT=3000 NODE_ENV=production',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      key: '~/.ssh/google_rsa',
      user: 'xiawang1024',
      host: '35.194.208.201',
      ref: 'origin/wechat',
      repo: 'https://github.com/xiawang1024/koa-learn.git',
      path: '/home/xiawang1024/WWW/production/nuxt',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
