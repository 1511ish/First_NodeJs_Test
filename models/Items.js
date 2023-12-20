const Sequelize = require('sequelize');

const sequelize = require('../util/database');

module.exports = sequelize.define('item',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    item_name: {
       type: Sequelize.STRING,
       allowNull: false
    },
    description: {
       type: Sequelize.STRING
    },
    price: {
       type: Sequelize.INTEGER
    },
    quantity: {
       type: Sequelize.INTEGER
    }
});