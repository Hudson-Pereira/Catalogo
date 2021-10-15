const sequelize = require('../config/sequelize')

const Sequelize = require('sequelize')

const Heroi = require('./herois')

const heroi = Heroi(sequelize, Sequelize.DataTypes)

const db = { heroi, sequelize }

module.exports = db
