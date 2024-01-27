require('dotenv').config()
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// how .exe app affect with config?
const url = `${process.env.ENV_URL}/${process.env.ENV_DBNAME}`;
console.log(url);
const sequelize = new Sequelize('jpa', 'root', 'mysqldb', {
    host: 'localhost',
    dialect: "mysql"/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

const testConnection = async () => {
    try {
        const resp = await sequelize.authenticate();
        console.log('Connection has been established successfully.', resp );
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    return false;
}

module.exports = { testConnection }