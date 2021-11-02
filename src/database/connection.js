const Sequelize = require('sequelize');
const { database } = require('../../config/index.json');

const sequelize = new Sequelize(database.db, database.user, database.password, {
  host: database.host,
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
