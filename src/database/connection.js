const Sequelize = require('sequelize');
const config = require('../../config/database.json');

const sequelize = new Sequelize(config.db, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  define: {
    timestamps: false,
  },
});

const checkConnection = () => {
  console.log('Checking connection...');
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
};

checkConnection();

module.exports = sequelize;
