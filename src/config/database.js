require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const path = require('path');

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT || 'postgres',
  storage: path.resolve(__dirname, '../../__tests__/database.sqlite'),
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
