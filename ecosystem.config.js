module.exports = {
  apps: [
    {
      name: "nextjs",
      exec_mode: "cluster",
      instances: 2, // Or a number of instances
      script: "node_modules/next/dist/bin/next",
      args: "start",
      autorestart: false,
      watch: true,
      max_memory_restart: "2G",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      env: {
        NODE_ENV: "development",
        UV_THREADPOOL_SIZE: 128,
      },
      env_production: {
        NODE_ENV: "production",
        UV_THREADPOOL_SIZE: 128,
      },
    },
  ],
};
