config.mysql = {
  client: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'passwd',
    database: 'helloworld',
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
  },
  app: true
  agent: false
};   
