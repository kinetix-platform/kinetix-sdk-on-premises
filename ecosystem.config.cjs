module.exports = {
    apps: [
        {
            name: 'kinetix-api',
            script: './src/api/index.js',
            exec_mode: 'cluster',
            instances: 1,
        }, 
        {
            name: 'kinetix-portal',
            script: './src/portal/index.js',
            exec_mode: 'cluster',
            instances: 1
        },
        {
            name: 'kinetix-webhook',
            script: './src/webhook/index.js',
            exec_mode: 'cluster',
            instances: 1
        }
    ]
  }