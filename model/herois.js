const { Sequelize, DataTypes } = require('sequelize')
const database = require('./database')

const Heroi = database.sequelize.define('heroi', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Imagem: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Força: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Velocidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Habilidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Equipamento: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Inteligência: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Poder: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

module.exports = Heroi
