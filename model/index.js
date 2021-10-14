const sequelize = require('../config/sequelize')
const Heroi = require('./herois')
const Sequelize = require('sequelize')
const heroi = Heroi(sequelize, Sequelize.DataTypes)

const db = { heroi, sequelize }
module.exports = db