const config = {
  user: process.env.MssqlDBUser,
  password: process.env.MssqlDBPassword,
  server: process.env.MssqlDBServer,
  database: process.env.MssqlDBDatabase,
};

module.exports = config;
