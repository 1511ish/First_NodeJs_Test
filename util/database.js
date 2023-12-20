const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs-firsttest-db','root','Password',{dialect: 'mysql', host:'localhost'});

module.exports = sequelize;